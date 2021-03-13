from django.db import migrations
from api.user.models import CustomUser


class Migration(migrations.Migration):
    def seed_data(apps, schema_editor):
        user = CustomUser(name="Chirag",
                          email="chiragaparadh@gmail.com",
                          is_staff=True,
                          is_superuser=True,
                          phone="+919833039704",
                          gender="Male")

        user.set_password('12345')
        user.save()

    dependencies = []

    operations = [
        migrations.RunPython(seed_data),
    ]
