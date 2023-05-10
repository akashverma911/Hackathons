# Generated by Django 4.1.7 on 2023-05-08 19:22

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Hackathon',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('background_image', models.ImageField(upload_to='hackathon/background/')),
                ('hackathon_image', models.ImageField(upload_to='hackathon/image/')),
                ('submission_type', models.CharField(choices=[('image', 'Image'), ('file', 'File'), ('link', 'Link')], max_length=10)),
                ('start_datetime', models.DateTimeField()),
                ('end_datetime', models.DateTimeField()),
                ('reward_prize', models.DecimalField(decimal_places=2, max_digits=8)),
                ('participants', models.ManyToManyField(related_name='participating_hackathons', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]