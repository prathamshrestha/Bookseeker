from rest_framework import serializers
from .models import User
from django.contrib.auth import authenticate
from rest_framework_jwt.settings import api_settings

# class RegisterSerializers(serializers.ModelSerializer):
#     """
#     Serializers to Model CustomUser
#     """

#     confirm_password = serializers.CharField(max_length=128,
#                                              style={'input_type': 'password'},
#                                              write_only=True)
#     token = serializers.SerializerMethodField()

#     class Meta:
#         model = User
#         fields = ['first_name', 'middle_name','last_name', 'email',
#                   'username', 'contact_number', 'contact_address',
#                   'password', 'confirm_password','is_collegestudent']
#         # read_only_fields = ['id']
#         extra_kwargs = {
#             'password': {
#                 'write_only': True
#             },
#         }
    
#      def get_token(self, obj):
#         jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
#         jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

#         payload = jwt_payload_handler(obj)
#         token = jwt_encode_handler(payload)
#         return token

#     @staticmethod
#     def validate_contact_number(contact_number):
#         """
#         Validate the contact number field
#         """
#         if contact_number is None:
#             raise serializers.ValidationError("Enter your Contact Number")

#         if len(str(contact_number)) != 10:
#             raise serializers.ValidationError("Contact Number should be of 10 digits")
#         return contact_number

#     def save(self):
#         account=User(
#                 email=self.validated_data['email'],
#                 username=self.validated_data['username'],
#             )
        
#         password             = self.validated_data['password']
#         confirm_password     = self.validated_data['confirm_password']
#         if password != confirm_password:
#             raise serializers.ValidationError("password do not match")
#         account.set_password(password)
#         account.save()

class UserSerializerWithToken(serializers.ModelSerializer):

    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)
    confirm_password = serializers.CharField(max_length=128,
                                             style={'input_type': 'password'},
                                             write_only=True)
    

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
    
    @staticmethod
    def validate_contact_number(contact_number):
        """
        Validate the contact number field
        """
        if contact_number is None:
            raise serializers.ValidationError("Enter your Contact Number")

        if len(str(contact_number)) != 10:
            raise serializers.ValidationError("Contact Number should be of 10 digits")
        return contact_number

    def save(self):
        account=User(
                email=self.validated_data['email'],
                username=self.validated_data['username'],
            )
        
        password             = self.validated_data['password']
        confirm_password     = self.validated_data['confirm_password']
        if password != confirm_password:
            raise serializers.ValidationError("password do not match")
        account.set_password(password)
        account.save()

    class Meta:
        model = User
        fields = ['first_name', 'middle_name','last_name', 'email',
                  'username', 'contact_number', 'contact_address',
                  'password', 'confirm_password','is_collegestudent']
        # read_only_fields = ['id']
        extra_kwargs = {
            'password': {
                'write_only': True
            },
        }

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')


class LoginSerializer(serializers.Serializer):
    username=serializers.CharField()
    password=serializers.CharField()

    def validate(self,data):
        user=authenticate(**data)
        if user:
            return user
        raise serializers.ValidationError("incorrect credentials")