from rest_framework import serializers
from .models import User

class RegisterSerializers(serializers.ModelSerializer):
    """
    Serializers to Model CustomUser
    """

    confirm_password = serializers.CharField(max_length=128,
                                             style={'input_type': 'password'},
                                             write_only=True)

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

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')