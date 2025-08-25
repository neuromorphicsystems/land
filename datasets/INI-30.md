---
{
    "name": "INI-30",
    "aliases": [],
    "year": 2024,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DVXplorer"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Eye Tracking",
        "Gaze Tracking"
    ],
    "description": "Eye and Gaze Tracking",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Zenodo"
        ],
        "file_formats": [
            "aedat"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Zenodo",
                "url": "https://zenodo.org/records/11203260?token=eyJhbGciOiJIUzUxMiJ9.eyJpZCI6ImEzYmE4ZTI4LTU2NDQtNDhiNC05YjcxLTYyZjRiNzNhYzU2MCIsImRhdGEiOnt9LCJyYW5kb20iOiI0MmY3NDgwOTZiZDM4YWM2NDhmNTk4ZTc5MDMxYTg2NiJ9.oyQ8cMq0xVIoCC0JLpnLIUWnsSVVJS91dzZJkwqTmTgaETtkTJqL7qBCu6Nz9bBdR1IhUGViAOSpTc6Z02ja5Q",
                "format": "aedat",
                "available": true
            }
        ],
        "size_gb": 4.4,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Retina : Low-Power Eye Tracking with Event Camera and Spiking Hardware",
        "doi": "10.1109/CVPRW63382.2024.00577",
        "authors": [
            "Pietro Bonazzi",
            "Sizhen Bian",
            "Giovanni Lippolis",
            "Yawei Li",
            "Sadique Sheik",
            "Michele Magno"
        ],
        "abstract": "This paper introduces a neuromorphic dataset and methodology for eye tracking, harnessing event data captured streamed continuously by a Dynamic Vision Sensor (DVS). The framework integrates a directly trained Spiking Neuron Network (SNN) regression model and leverages a state-of-the-art low power edge neuromorphic processor - Speck. First, it introduces a representative event-based eye-tracking dataset, \"Ini-30,\" which was collected with two glass-mounted DVS cameras from thirty volunteers. Then, a SNN model, based on Integrate And Fire (IAF) neurons, named \"Retina\", is described , featuring only 64k parameters (6.63x fewer than 3ET) and achieving pupil tracking error of only 3.24 pixels in a 64x64 DVS input. The continuous regression output is obtained by means of temporal convolution using a non-spiking 1D filter slided across the output spiking layer over time. Retina is evaluated on the neuromorphic processor, showing an end-to-end power between 2.89-4.8 mW and a latency of 5.57-8.01 ms dependent on the time to slice the event-based video recording. The model is more precise than the latest event-based eye-tracking method, \"3ET\", on Ini-30, and shows comparable performance with significant model compression (35 times fewer MAC operations) in the synthetic dataset used in \"3ET\". We hope this work will open avenues for further investigation of close-loop neuromorphic solutions and true event-based training pursuing edge performance.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 7,
            "updated": "2025-06-22T13:08:19.648039"
        },
        {
            "source": "scholar",
            "count": 18,
            "updated": "2025-06-22T13:08:18.835754"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2312.00425"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10678580"
        },
        {
            "type": "github_page",
            "url": "https://github.com/pbonazzi/retina"
        }
    ],
    "full_name": "https://ieeexplore.ieee.org/document/10678580",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "5684--5692",
        "year": 2024,
        "month": "jun",
        "author": "Bonazzi, Pietro and Bian, Sizhen and Lippolis, Giovanni and Li, Yawei and Sheik, Sadique and Magno, Michele",
        "publisher": "IEEE",
        "booktitle": "2024 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} {Workshops} ({CVPRW})",
        "urldate": "2024-12-14",
        "language": "en",
        "doi": "10.1109/CVPRW63382.2024.00577",
        "url": "https://ieeexplore.ieee.org/document/10678580/",
        "shorttitle": "Retina",
        "isbn": "9798350365474",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "Retina : {Low}-{Power} {Eye} {Tracking} with {Event} {Camera} and {Spiking} {Hardware}",
        "address": "Seattle, WA, USA",
        "type": "inproceedings",
        "key": "bonazzi_retina_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPRW59228.2023.00435",
            "source": "crossref"
        },
        {
            "doi": "10.1109/tvcg.2021.3067784",
            "source": "crossref"
        },
        {
            "doi": "10.1109/SENSORS56945.2023.10325167",
            "source": "crossref"
        },
        {
            "doi": "10.1201/9781003394440-7",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW59228.2023.00431",
            "source": "crossref"
        },
        {
            "doi": "10.1109/BioCAS58349.2023.10389062",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.685",
            "source": "crossref"
        },
        {
            "doi": "10.3758/s13428-019-01305-2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00701",
            "source": "crossref"
        },
        {
            "doi": "10.3390/s19245540",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.239",
            "source": "crossref"
        },
        {
            "doi": "10.1117/1.JBO.23.3.035001",
            "source": "crossref"
        },
        {
            "doi": "10.1109/msp.2019.2931595",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.91",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW59228.2023.00434",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV51458.2022.00399",
            "source": "crossref"
        },
        {
            "doi": "10.1117/12.2607434",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.114",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v32i1.12147",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3290605.3300646",
            "source": "crossref"
        },
        {
            "title": "Event-based vision: A survey",
            "source": "crossref"
        },
        {
            "title": "Recurrent cnn for 3d gaze estimation using appearance and shape cues",
            "source": "crossref"
        },
        {
            "title": "Ev-eye: Rethinking high-frequency eye tracking through the lenses of event cameras",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure
