# Generated by Django 5.0.4 on 2024-04-30 16:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='items',
            old_name='image_filename',
            new_name='image_file',
        ),
        migrations.AlterField(
            model_name='items',
            name='essential',
            field=models.BooleanField(),
        ),
        migrations.AlterField(
            model_name='items',
            name='rarity',
            field=models.CharField(choices=[(0, 'Bronze'), (1, 'Silver'), (2, 'Gold')], max_length=255),
        ),
    ]
