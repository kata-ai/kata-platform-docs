---
id: nl-studio-designing-nlu
title: Designing NLU
prev: nl-studio-kataent
next: nl-studio-training-guideline
---

Before creating a NLU, you need to know what things you want to discover to ease the process of designing NLU. Eventhough there is no restriction on how you can create your NLU, please note that more complex the NLU is, more training data is required to make the NLU better.

Some things that need to be considered in designing an NLU are:

- Number of labels in one entity.
- NLU complexity that affects the complexity of the training process.
- Number of entities in one NLU.

In NL Studio, one entity has its own model so that the more entities it has, the longer the training process will be.

Here are some suggestions for implementing NLU in NL Studio that can reduce complexity and simplify the training process.

## Dividing Entity Trait

If an entity has very many labels (for example: 50), it also requires 50 data. In addition, if the sentence form between labels is similar, it needs more data to make the NL have accurate predictions and a high score. To make it easier, you can break a label from one entity into several entities.

Example case, an entity intent with the following form:

```yaml
name: nl-v1
lang: id
entities
    intent:
        type: trait
        profile: intent
        labels:
            - lupa_pin
            - ganti_pin
            - kartu_hilang
            - buku_tabungan_hilang
            - ganti_kartu
            - ganti_buku_tabungan
            - buat_kartu
            - cara_daftar_nasabah
```

can be converted into 2 different entities as follows:

```yaml
name: nl-1
lang: id
entities:
  intent:
    type: trait
    profile: intent
    labels:
      - lupa
      - ganti
      - buat
      - hilang
  topic:
    type: trait
    profile: topic
    labels:
      - pin
      - kartu
      - buku_tabungan
      - nasabah
```

Using above method could also increase score value. It can be like as follow, `nl-1` will divide value 1 into 8 different groups for entity intent. While `nl-2` will divide value 1 into 4 different groups for entity intent and value 1 into 4 different groups for entity topic.

However, if there are enough training data or no problems are found, above method is not mandatory to be implemented. Furthermore, above method is useful if training data is limited.

## Utilizing Profile Intent

_(Only affect if using trait type entities with profile intent)_

In addition to dividing an entity trait into several other entities, it may also be done by utilizing one of profile intent characteristics that is influenced by other model predictions results (which are phrase or dict type). The following ways can speed up training process if training data amount is limited and the sentence form between labels is similar.

### Example 1

Given training data:

- dimana tempat perpanjang sim paling dekat? (`#ask_nearby_simstnk`)
- dimana tempat perpanjang stnk sekitar sini? (`#ask_nearby_simstnk`)
- dimana kantor polisi terdekat? (`#ask_nearby_police`)

```yaml
name: nl-v1
lang: id
entities
   intent:
        type: trait
        profile: intent
        labels:
            - ask_nearby_simstnk
            - ask_nearby_police
```

Above NL can be changed into:

```yaml
name: nl-v1
lang: id
entities
   simstnk:
        type: dict
        profile: default
        dictionary:
            sim:
                - sim
                - surat izin mengemudi
            stnk:
                - stnk
                - surat tanda nomor kendaraan
   intent:
        type: trait
        profile: intent
        labels:
            - ask_nearby_simstnk
            - ask_nearby_police
```

Words 'sim' and 'stnk' falls into one group with similar category.

However, this profile intent characteristics shall be watched out because it can eliminate detailed information.

### Example 2

Given training data:

- resep untuk membuat pizza bbq apa ya? (`#ask_bbq_recipe`)
- pizza pepperoni gimana cara buatnya ya? (`#ask_pepperoni_recipe`)
- kasih tau dong resep pizza aas buatanmu (`#ask_aas_recipe`)

```yaml
name: nl-v1
lang: id
entities
   intent:
        type: trait
        profile: intent
        labels:
            - ask_bbq_recipe
            - ask_pepperoni_recipe
            - ask_aas_recipe
```

```yaml
name: nl-v2
lang: id
entities
   pizza:
        type: dict
        profile: default
        dictionary:
            bbq:
                - bbq
                - barberque
            pepperoni:
                - pepperoni
                - peperoni
            aas:
                - aas
                - american all star
   intent:
        type: trait
        profile: intent
        labels:
            - ask_bbq_recipe
            - ask_pepperoni_recipe
            - ask_aas_recipe
```

'Intent' entity for nl-v1 can distinguish the 3 labels, but nl-v2 cannot differentiate that because the words 'bbq', 'pepperoni', and 'aas' are considered in similar group, namely pizza. If you are given input "resep buat bbq apa ya?" Then the probability for three labels are same (based on the training data above).

If you still wish to use dictionary to ease the training and classification process, it can be done in the following way.

```yaml
name: nl-v3
lang: id
entities
   pizza:
        type: dict
        profile: default
        dictionary:
            bbq:
                - bbq
                - barberque
            pepperoni:
                - pepperoni
                - peperoni
            aas:
                - aas
                - american all star
   intent:
        type: trait
        profile: intent
        labels:
            - ask_pizza_recipe
```

Using nl-v3, user able to find out whether a sentence has an `ask_pizza_recipe` intent. To find out specific type of pizza, use pizza entity.

Do above action to simplify introduction of words, which is limited product names, in created BOT domain. It is not recommended to use this method for general words.

## Dividing NL

A Bot can have more than one NLU. Here are some cases where NLU can be separated.

### NL Specific for Certain Flow

Some flow in a bot can have a special NL for a flow where an input for the flow is different from other flow-glow. This can reduce labels number owned by an entity and facilitate prediction process. Example:

- `Credential` NL is only executed when user first befriends with your bot.
- `Order` NL on E-Commerce Bot which will be run only when user selects 'order' menu

### NL Specific for Certain State

Some states in a bot may get similar input, however it have different meanings depending on what state is running. It can be given a condition to run this NL in certain states only in BOT studio Example:

- `YesNo` NL which can be used in various flows, but it is specific to states that require user confirmation.

**Notes**

Some of methods above can be an alternative for condition such as: an entity contains many labels, data between labels are similar, the amount of training data is limited, prediction results are still not optimal, or other different problems. If there is no problem found, you can create only one entity that has many labels.
