from django.db import models



class Items(models.Model):
    '''
    Items need to have a name, rarity,
    if essential, description, item location,
    and an image file.
    
    Rarity is a choice field with 3 options:
    Bronze, Silver, and Gold.
    '''


    RARITY_CHOICES: tuple[int, str] = (
      (0, 'Bronze'),
      (1, 'Silver'),
      (2, 'Gold'),
    )

    id = models.AutoField(primary_key=True, blank=False)
    name = models.CharField(max_length=255, blank=False)
    rarity = models.CharField(
        max_length=255,
        blank=False
        )
    description = models.CharField(max_length=255, blank=False)
    item_location = models.CharField(max_length=255, blank=False)
    image_file = models.FileField(upload_to='frontend/static/assets/items')
    
    def __str__(self):
        return self.name