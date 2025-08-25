---
{
    "name": "DailyAction-DVS",
    "aliases": [],
    "year": 2021,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Human Action Recognition"
    ],
    "description": "Action Recognition",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "aedat"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/drive/folders/1JrYJnikaJdiNgq5Zz5pwbN-nwns-NNpz",
                "format": "aedat",
                "available": true
            }
        ],
        "size_gb": 0.726,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Event-based Action Recognition Using Motion Information and Spiking Neural Networks",
        "doi": "10.24963/ijcai.2021/240",
        "authors": [
            "Qianhui Liu",
            "Dong Xing",
            "Huajin Tang",
            "De Ma",
            "Gang Pan"
        ],
        "abstract": "Event-based cameras have attracted increasing attention due to their advantages of biologically inspired paradigm and low power consumption. Since event-based cameras record the visual input as asynchronous discrete events, they are inherently suitable to cooperate with the spiking neural network (SNN). Existing works of SNNs for processing events mainly focus on the task of object recognition. However, events from the event-based camera are triggered by dynamic changes, which makes it an ideal choice to capture actions in the visual scene. Inspired by the dorsal stream in visual cortex, we propose a hierarchical SNN architecture for event-based action recognition using motion information. Motion features are extracted and utilized from events to local and \ufb01nally to global perception for action recognition. To the best of the authors\u2019 knowledge, it is the \ufb01rst attempt of SNN to apply motion information to event-based action recognition. We evaluate our proposed SNN on three event-based action recognition datasets, including our newly published DailyAction-DVS dataset comprising 12 actions collected under diverse recording conditions. Extensive experimental results show the effectiveness of motion information and our proposed SNN architecture for event-based action recognition.",
        "open_access": true
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 50,
            "updated": "2025-07-04T17:40:35.234552"
        },
        {
            "source": "scholar",
            "count": 96,
            "updated": "2025-07-04T17:40:34.725006"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://www.ijcai.org/proceedings/2021/240"
        },
        {
            "type": "github_page",
            "url": "https://github.com/qianhuiliu/SNN-action-recognition"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "1440",
        "num_subjects": "15",
        "num_classes": "12",
        "stereo": false
    },
    "bibtex": {
        "pages": "1743--1749",
        "year": 2021,
        "month": "aug",
        "author": "Liu, Qianhui and Xing, Dong and Tang, Huajin and Ma, De and Pan, Gang",
        "publisher": "International Joint Conferences on Artificial Intelligence Organization",
        "booktitle": "Proceedings of the {Thirtieth} {International} {Joint} {Conference} on {Artificial} {Intelligence}",
        "urldate": "2024-04-13",
        "language": "en",
        "doi": "10.24963/ijcai.2021/240",
        "url": "https://www.ijcai.org/proceedings/2021/240",
        "isbn": "978-0-9992411-9-6",
        "title": "Event-based {Action} {Recognition} {Using} {Motion} {Information} and {Spiking} {Neural} {Networks}",
        "address": "Montreal, Canada",
        "type": "inproceedings",
        "key": "liu_event-based_2021"
    },
    "referenced_papers": []
}
---

### Dataset Structure

Dataset has 1440 recordings of 15 subjects acting performing 12 different actions.
