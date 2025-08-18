---
{
    "name": "CED",
    "aliases": [],
    "year": 2019,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346 Colour"
    ],
    "other_sensors": [],
    "category": "Domain Specific Application",
    "subcategory": [
        "Colour Sensors"
    ],
    "task": "Colour event based camera",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": true,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "ROSbag"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://rpg.ifi.uzh.ch/CED.html",
                "format": "ROSbag",
                "available": true
            }
        ],
        "size_gb": 32.9,
        "size_type": "Uncompressed"
    },
    "paper": {
        "title": "CED -  Color Event Camera Dataset",
        "doi": "10.1109/CVPRW.2019.00215",
        "authors": [
            "Cedric Scheerlinck",
            "Henri Rebecq",
            "Timo Stoffregen",
            "Nick Barnes",
            "Robert Mahony",
            "Davide Scaramuzza"
        ],
        "abstract": "Event cameras are novel, bio-inspired visual sensors, whose pixels output asynchronous and independent timestamped spikes at local intensity changes, called \u2018events\u2019. Event cameras offer advantages over conventional framebased cameras in terms of latency, high dynamic range (HDR) and temporal resolution. Until recently, event cameras have been limited to outputting events in the intensity channel, however, recent advances have resulted in the development of color event cameras, such as the ColorDAVIS346. In this work, we present and release the \ufb01rst Color Event Camera Dataset (CED), containing 50 minutes of footage with both color frames and events. CED features a wide variety of indoor and outdoor scenes, which we hope will help drive forward event-based vision research. We also present an extension of the event camera simulator ESIM [1] that enables simulation of color events. Finally, we present an evaluation of three state-of-the-art image reconstruction methods that can be used to convert the ColorDAVIS346 into a continuous-time, HDR, color video camera to visualise the event stream, and for use in downstream vision applications.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 45,
            "updated": "2024-10-26 12:53:51.904655"
        },
        {
            "source": "scholar",
            "count": 101,
            "updated": "2025-06-14T09:45:13.257374"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/1904.10772"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9025505"
        },
        {
            "type": "project_page",
            "url": "https://rpg.ifi.uzh.ch/CED.html"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "total_duration": "50 minutes",
        "num_frames": "100000",
        "num_classes": "5"
    },
    "bibtex": {
        "pages": "1684--1693",
        "year": 2019,
        "month": "jun",
        "author": "Scheerlinck, Cedric and Rebecq, Henri and Stoffregen, Timo and Barnes, Nick and Mahony, Robert and Scaramuzza, Davide",
        "publisher": "IEEE",
        "booktitle": "2019 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} {Workshops} ({CVPRW})",
        "urldate": "2023-09-05",
        "language": "en",
        "doi": "10.1109/CVPRW.2019.00215",
        "url": "https://ieeexplore.ieee.org/document/9025505/",
        "shorttitle": "{CED}",
        "isbn": "978-1-72812-506-0",
        "title": "{CED}: {Color} {Event} {Camera} {Dataset}",
        "address": "Long Beach, CA, USA",
        "type": "inproceedings",
        "key": "scheerlinck_ced_2019"
    }
}
---

### Dataset Structure

- Contains 50 minutes of recordings
- Contains 100000 DAVIS frames
- Includes 5 categories of recordings

| **Name**                                | **Description**                                                                                                                                                                           |     | **Download**                                                                       |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | ---------------------------------------------------------------------------------- |
| **Simple**                              | Simple camera motions looking at simple objects and scenes with vibrant colors such as fruit, blocks and posters.                                                                         |     | [Rosbags (4.6G)](https://rpg.ifi.uzh.ch/datasets/CED/CED_simple.zip)               |
| details                                 |                                                                                                                                                                                           |     |                                                                                    |
| **Indoors**                             | Natural indoor scenes including office, kitchen, rooms and corridors.                                                                                                                     |     | [Rosbags (3.3G)](https://rpg.ifi.uzh.ch/datasets/CED/CED_indoors.zip)              |
| details                                 |                                                                                                                                                                                           |     |                                                                                    |
| **People**                              | Common actions and gestures such as sitting, waving, jumping, air guitar.                                                                                                                 |     | [Rosbags (5.4G)](https://rpg.ifi.uzh.ch/datasets/CED/CED_people.zip)               |
| details                                 |                                                                                                                                                                                           |     |                                                                                    |
| **Driving**                             | Footage from front windshield of car driving around country, suburban and city landscapes. Features tunnels, traffic lights, vehicles and pedestrians during the day in sunny conditions. |     | [Rosbags (18G)](https://rpg.ifi.uzh.ch/datasets/CED/CED_driving.zip)               |
| details                                 |                                                                                                                                                                                           |     |                                                                                    |
| **Calibration**                         | ColorChecker and density step target: indoors, outdoors, with and without infrared filter.                                                                                                |     | [Rosbags (1G)](https://rpg.ifi.uzh.ch/datasets/CED/CED_calibration.zip)            |
| details                                 |                                                                                                                                                                                           |     |                                                                                    |
| **Additional**                          | Additional sequences recorded with an infrared filter.                                                                                                                                    |     | [Rosbags (0.6G)](https://rpg.ifi.uzh.ch/datasets/CED/CED_additional_IR_filter.zip) |
| Source: https://rpg.ifi.uzh.ch/CED.html |                                                                                                                                                                                           |     |                                                                                    |
