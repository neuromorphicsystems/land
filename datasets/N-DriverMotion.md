---
{
    "name": "N-DriverMotion",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Driver Monitoring",
        "Human Action Recognition"
    ],
    "description": "Driver Monitoring Systems",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "No dataset link was provided",
        "dataset_links": []
    },
    "paper": {
        "title": "N-DriverMotion: Driver Motion Learning and Prediction Using an Event-Based Camera and Directly Trained Spiking Neural Networks on Loihi 2",
        "doi": "10.1109/OJVT.2024.3504481",
        "authors": [
            "Hyo Jong Chung",
            "Byungkon Kang",
            "Yoon Seok Yang"
        ],
        "abstract": "Driver motion recognition is a principal factor in ensuring the safety of driving systems. This paper presents a novel system for learning and predicting driver motions and an event-based high-resolution (1280x720) dataset, N-DriverMotion, newly collected to train on a neuromorphic vision system. The system comprises an event-based camera that generates the first high-resolution driver motion dataset representing spike inputs and efficient spiking neural networks (SNNs) that are effective in training and predicting the driver's gestures. The event dataset consists of 13 driver motion categories classified by direction (front, side), illumination (bright, moderate, dark), and participant. A novel simplified four-layer convolutional spiking neural network (CSNN) that we proposed was directly trained using the high-resolution dataset without any time-consuming preprocessing. This enables efficient adaptation to on-device SNNs for real-time inference on high-resolution event-based streams. Compared with recent gesture recognition systems adopting neural networks for vision processing, the proposed neuromorphic vision system achieves comparable accuracy, 94.04\\%, in recognizing driver motions with the CSNN architecture. Our proposed CSNN and the dataset can be used to develop safer and more efficient driver monitoring systems for autonomous vehicles or edge devices requiring an efficient neural network architecture.",
        "open_access": true
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 1,
            "updated": "2025-07-02T20:38:00.573111"
        },
        {
            "source": "scholar",
            "count": 1,
            "updated": "2025-07-02T20:38:00.224969"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2408.13379v1"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10763457"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_classes": "13",
        "num_recordings": "1239",
        "num_subjects": "23",
        "num_lighting_conditions": "3",
        "stereo": false
    },
    "bibtex": {
        "pages": "68--80",
        "year": 2025,
        "author": "Chung, Hyo Jong and Kang, Byungkon and Yang, Yoon Seok",
        "journal": "IEEE Open Journal of Vehicular Technology",
        "urldate": "2024-12-14",
        "language": "en",
        "doi": "10.1109/OJVT.2024.3504481",
        "url": "https://ieeexplore.ieee.org/document/10763457/",
        "shorttitle": "N-{DriverMotion}",
        "issn": "2644-1330",
        "copyright": "https://creativecommons.org/licenses/by/4.0/legalcode",
        "volume": "6",
        "title": "N-{DriverMotion}: {Driver} {Motion} {Learning} and {Prediction} {Using} an {Event}-{Based} {Camera} and {Directly} {Trained} {Spiking} {Neural} {Networks} on {Loihi} 2",
        "type": "article",
        "key": "chung_n-drivermotion_2025"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/JAS.2020.1003021",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3320288.3320304",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00374",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v34i07.6787",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IJCNN48605.2020.9207109",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2013.71",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2020.00637",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2023.3328220",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2020.00424",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSEN.2020.2973049",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2022.3172212",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58598-3_25",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00573",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MM.2018.112130359",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.781",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00568",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICME.2019.00242",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.00603",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2023.1244675",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IJCNN52387.2021.9533738",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JPROC.2021.3067593",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TSUSC.2023.3324339",
            "source": "crossref"
        },
        {
            "doi": "10.1109/SiPS52927.2021.00053",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICASSP48485.2024.10448003",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3589737.3605973",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IJCNN.2016.7727212",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00508",
            "source": "crossref"
        },
        {
            "doi": "10.1162/neco_a_01086",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2020.590164",
            "source": "crossref"
        },
        {
            "doi": "10.1007/3-540-46805-6",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00405",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00481",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00437",
            "source": "crossref"
        },
        {
            "doi": "10.1016/bs.adcom.2015.04.001",
            "source": "crossref"
        },
        {
            "title": "New rules to improve road safety and enable fully driverless vehicles in the EU",
            "source": "crossref"
        },
        {
            "title": "Lava, an open-source software framework for developing neuromorphic systems",
            "source": "crossref"
        },
        {
            "title": "Taking neuromorphic computing to the next level with loihi 2",
            "source": "crossref"
        },
        {
            "title": "SLAYER: Spike layer error reassignment in time",
            "source": "crossref"
        },
        {
            "title": "Object recognition with gradient-based learning",
            "source": "crossref"
        },
        {
            "title": "A 240 180 10mW 12us latency sparse-output vision sensor for mobile applications",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- 13 classes
- 1239 recordings
- 23 subjects
- 3 lighting conditions.
