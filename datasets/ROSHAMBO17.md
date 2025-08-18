---
{
    "name": "ROSHAMBO17",
    "aliases": [],
    "year": 2017,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS240"
    ],
    "other_sensors": [],
    "category": "Benchmarking, SNN Training Task, and SNN Training",
    "subcategory": [
        "Classification Datasets"
    ],
    "task": "Visual Game",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Other"
        ],
        "file_formats": [
            "aedat"
        ],
        "availability_comment": "Dataset is shared via Resilio Sync",
        "dataset_links": [
            {
                "name": "Other",
                "url": "https://link.resilio.com/#f=RoShamBoNPP&sz=0&t=2&s=CGC7YJLO5SR3JNFVDQ3AQXUFPAS33ZARNW6KO7BTEWQNGSBSTWPQ&i=CMQ7LDNPDJWJGVJNTVUZW55TNN6XL56KY&v=2.7&a=2",
                "format": "aedat",
                "available": false
            }
        ],
        "size_gb": 80.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Live demonstration: Convolutional neural network driven by dynamic vision sensor playing RoShamBo",
        "doi": "10.1109/ISCAS.2017.8050403",
        "authors": [
            "Iulia-Alexandra Lungu",
            "Federico Corradi",
            "Tobi Delbruck"
        ],
        "abstract": "This demonstration presents a convolutional neural network (CNN) playing \u201cRoShamBo\u201d (\u201crock-paper-scissors\u201d) against human opponents in real time. The network is driven by dynamic and active-pixel vision sensor (DAVIS) events, acquired by accumulating events into fixed event-number frames.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 44,
            "updated": "2025-07-03T10:08:20.079940"
        },
        {
            "source": "scholar",
            "count": 73,
            "updated": "2025-07-03T10:08:19.730032"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/8050403"
        },
        {
            "type": "project_page",
            "url": "https://docs.google.com/document/d/1rOltN_BaOTAMbP1chzFZxPjN24eTdbzuCrCM4S2o6qA/edit#heading=h.6v6s3wqf4smz"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "1--1",
        "year": 2017,
        "month": "may",
        "author": "Lungu, Iulia-Alexandra and Corradi, Federico and Delbruck, Tobi",
        "publisher": "IEEE",
        "booktitle": "2017 {IEEE} {International} {Symposium} on {Circuits} and {Systems} ({ISCAS})",
        "urldate": "2023-09-05",
        "language": "en",
        "doi": "10.1109/ISCAS.2017.8050403",
        "url": "http://ieeexplore.ieee.org/document/8050403/",
        "shorttitle": "Live demonstration",
        "isbn": "978-1-4673-6853-7",
        "title": "Live demonstration: {Convolutional} neural network driven by dynamic vision sensor playing {RoShamBo}",
        "address": "Baltimore, MD, USA",
        "type": "inproceedings",
        "key": "lungu_live_2017"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/EBCCSP.2016.7605233",
            "source": "crossref"
        },
        {
            "title": "A 128 &#x00D7; 128 120dB 15us Latency Asynchronous Temporal Contrast Vision Sensor",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

20 people were recorded over continuous videos for each of the three rock, paper and scissors symbols, amounting to around 5 hours of total recording time. A fourth background category was also recorded in order to capture non-hand data necessary for classification tasks.
