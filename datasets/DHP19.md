---
{
    "name": "DHP19",
    "aliases": [],
    "year": 2019,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "subcategory": [
        "Human Action Recognition"
    ],
    "task": "Human pose estimation",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "aedat"
        ],
        "availability_comment": "This dataset uses a custom version of the aedat file format in which 4 different streams of data are merged into a single file.",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://www.research-collection.ethz.ch/handle/20.500.11850/694758",
                "format": "aedat",
                "available": true
            }
        ],
        "size_gb": 145.5,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "DHP19 -  Dynamic Vision Sensor 3D Human Pose Dataset",
        "doi": "10.1109/CVPRW.2019.00217",
        "authors": [
            "Enrico Calabrese",
            "Gemma Taverni",
            "Christopher Awai Easthope",
            "Sophie Skriabine",
            "Federico Corradi",
            "Luca Longinotti",
            "Kynan Eng",
            "Tobi Delbruck"
        ],
        "abstract": "Human pose estimation has dramatically improved thanks to the continuous developments in deep learning. However, marker-free human pose estimation based on standard frame-based cameras is still slow and power hungry for real-time feedback interaction because of the huge number of operations necessary for large Convolutional Neural Network (CNN) inference. Event-based cameras such as the Dynamic Vision Sensor (DVS) quickly output sparse moving-edge information. Their sparse and rapid output is ideal for driving low-latency CNNs, thus potentially allowing real-time interaction for human pose estimators. Although the application of CNNs to standard framebased cameras for human pose estimation is well established, their application to event-based cameras is still under study. This paper proposes a novel benchmark dataset of human body movements, the Dynamic Vision Sensor Human Pose dataset (DHP19). It consists of recordings from 4 synchronized 346x260 pixel DVS cameras, for a set of 33 movements with 17 subjects. DHP19 also includes a 3D pose estimation model that achieves an average 3D pose estimation error of about 8 cm, despite the sparse and reduced input data from the DVS.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 53,
            "updated": "2024-10-26 12:54:03.041549"
        },
        {
            "source": "scholar",
            "count": 109,
            "updated": "2025-06-16T09:43:36.499143"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://openaccess.thecvf.com/content_CVPRW_2019/papers/EventVision/Calabrese_DHP19_Dynamic_Vision_Sensor_3D_Human_Pose_Dataset_CVPRW_2019_paper.pdf"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9025364"
        },
        {
            "type": "project_page",
            "url": "https://sites.google.com/view/dhp19/home"
        }
    ],
    "full_name": "Dynamic Vision Sensor (DVS) 3D Human Pose Dataset",
    "additional_metadata": {
        "num_classes": "33",
        "num_subjects": "17",
        "num_female": "12",
        "num_male": "5"
    },
    "bibtex": {
        "pages": "1695--1704",
        "year": 2019,
        "month": "jun",
        "author": "Calabrese, Enrico and Taverni, Gemma and Easthope, Christopher Awai and Skriabine, Sophie and Corradi, Federico and Longinotti, Luca and Eng, Kynan and Delbruck, Tobi",
        "publisher": "IEEE",
        "booktitle": "2019 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} {Workshops} ({CVPRW})",
        "urldate": "2023-09-05",
        "language": "en",
        "doi": "10.1109/CVPRW.2019.00217",
        "url": "https://ieeexplore.ieee.org/document/9025364/",
        "shorttitle": "{DHP19}",
        "isbn": "978-1-72812-506-0",
        "title": "{DHP19}: {Dynamic} {Vision} {Sensor} {3D} {Human} {Pose} {Dataset}",
        "address": "Long Beach, CA, USA",
        "type": "inproceedings",
        "key": "calabrese_dhp19_2019"
    }
}
---

### Dataset Structure

- Contains 33 movements from 17 participants (12 female and 5 male).
- Note: This dataset uses a custom version of the aedat file format in which 4 different streams of data are merged into a single file.

______________________________________________________________________
