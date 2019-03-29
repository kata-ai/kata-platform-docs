---
id: nl-studio-super-model
title: 'Super Model'
prev: nl-studio-nl-prediction-api
---

Super Model is a highly maintained pre-built entity for Users to use without training. This feature aims to help Users build their NL fastly and easily.

## Kata Entity

Introducting Kata Entity, `kata`, the default entity tagger that User can use without training data.

### Descriptions

- This entity will be auto added in **NEW Project/NLU**.
- The entity can be used without adding any training data.
- The model for this entity is maintained by Team Kata and all Users will automatically get the updated version whenever Team Kata improved it.
- Once you delete this entity, you can't retrieve it back, be careful when doing that.
- Training this entity won’t give immediate effect but we encourage you to give feedback if you found any error in prediction as it would become valuable improvements for our models.

### Labels

Currently, there are thirteen common labels that Users can achieve when using Kata Entity.

| **Label**   | **Description**                                                                   | **Examples**                                                                        |
| ----------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Person      | Person's name                                                                     | Budi, Siti, Rina Putri                                                              |
| Location    | General location, city, country, address                                          | Jakarta, Indonesia, Jln Pangeran Antasari 18A                                       |
| Email       | General email                                                                     | business@mail.com, jobs@company.com                                                 |
| Phone       | General phone                                                                     | +62 80123456789, (021) 3456789, 021-5678-9012                                       |
| Datetime    | Date and time                                                                     | hari ini, 17 Agustus 1945, tahun 2019, besok, 17/9/45, jam 3 siang, pagi ini, 19:00 |
| Number      | Number in digit, number in word, sequence of number, mix number in digit and word | 123, 92, 9.000, satu, dua, tiga ribu, dua tiga, delapan tujuh, 9 juta, 5rb          |
| Currency    | Currency name, money                                                              | IDR, SGD, rupiah, US dollar, Rp 5000, 5 ribu rupihah, $3, 9 USD                     |
| Area        | Unit area                                                                         | 5 meter persegi, sepuluh m2, 200 ha                                                 |
| Duration    | Unit duration                                                                     | 3 jam, 10 detik, 5 jam 30 menit, sehari, dua hari                                   |
| Length      | Unit lenght                                                                       | 5 meter, delapan cm                                                                 |
| Temperature | Unit temperature                                                                  | 40 derajat celcius, -5 derajat                                                      |
| Volume      | Unit volume                                                                       | 6 liter                                                                             |
| Weight      | Unit weight                                                                       | tujuh kilogram, 5 gr, 9kg                                                           |

## FAQs

**How to use Kata Entity in BOT?**
Same as using any other NL from NL Studio, simply add the NL in Bot's NL and you can use it as attributes. For more details, refer to documentation **Kata ML > NLU > NL Studio NLU**

**Why my Kata Entity is not improved after I input training data it?**
Currently the training data that User give is not directly influence the model to ensure model's quality, but every correction that User give would be saved and evaluate later for model's improvement. In order to rise the quality of Kata Entity, we encourage you to give correction every time you see error in prediction.

**Can I add or delete labels in kataent?**
Kata Entity can not be edited or updated. Give suggestion to us if you feel there are labels that should be included.

**How to add this entity to existing Project?**
Currently Kata Entity only available for new Projects.

**Is this available in English?**
Currently Kata Entity only available for NLU Bahasa Indonesia
