from rest_framework import serializers
from .models import User

class CustomUserModelSerializers(serializers.ModelSerializer):
    """
    Serializers to Model CustomUser
    """

    confirm_password = serializers.CharField(max_length=128,
                                             style={'input_type': 'password'},
                                             write_only=True)

    class Meta:
        model = User
        fields = ['id', 'email',
                  'username', 'contact_number', 'contact_address',
                  'password', 'confirm_password', 'first_name', 'middle_name', 'last_name']
        read_only_fields = ['id']
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

    def validate(self, data):
        """
        Checks if the password and confirm password matches
        :param data: dictionary key,value from field,submitted data
        :return data without confirm_password key in dictionary:
        """
        view = self.context.get('view')
        if view and view.action == 'create':
            password = data['password']
            confirm_password = data['confirm_password']
            if password != confirm_password:
                raise serializers.ValidationError("password do not match")
            else:
                # Popping out confirm_password key,value as there is no attribute in model to save
                _ = data.pop('confirm_password')
            return data
        return super().validate(data)