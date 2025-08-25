---
{
    "name": "Event-ReId",
    "aliases": [],
    "year": 2024,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Person Detection",
        "Surveillance",
        "Human Pose Recognition",
        "Person Identification",
        "Privacy Preservation",
        "First-person"
    ],
    "description": "Human pose estimation",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "CSV"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://zenodo.org/records/10398002",
                "format": "CSV",
                "available": true,
                "doi": "10.5281/zenodo.8256439"
            }
        ],
        "size_gb": 0.67,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Person Re-Identification without Identification via Event Anonymization",
        "doi": "10.1109/ICCV51070.2023.01022",
        "authors": [
            "Shafiq Ahmad",
            "Pietro Morerio",
            "Alessio Del Bue"
        ],
        "abstract": "Wide-scale use of visual surveillance in public spaces puts individual privacy at stake while increasing resource consumption (energy, bandwidth, and computation). Neuromorphic vision sensors (event-cameras) have been recently considered a valid solution to the privacy issue because they do not capture detailed RGB visual information of the subjects in the scene. However, recent deep learning architectures have been able to reconstruct images from event cameras with high fidelity, reintroducing a potential threat to privacy for event-based vision applications. In this paper, we aim to anonymize event-streams to protect the identity of human subjects against such image reconstruction attacks. To achieve this, we propose an end-to-end network architecture jointly optimized for the twofold objective of preserving privacy and performing a downstream task such as person ReId. Our network learns to scramble events, enforcing the degradation of images recovered from the privacy attacker. In this work, we also bring to the community the first ever event-based person ReId dataset gathered to evaluate the performance of our approach. We validate our approach with extensive experiments and report results on the synthetic event data simulated from the publicly available SoftBio dataset and our proposed Event-ReId dataset. The code is available at https://github.com/IIT-PAVIS/ReId_without_Id",
        "open_access": true
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 17,
            "updated": "2025-07-06T10:32:20.730164"
        },
        {
            "source": "scholar",
            "count": 27,
            "updated": "2025-07-06T10:32:20.500685"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2308.04402"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/abstract/document/10377578"
        },
        {
            "type": "github_page",
            "url": "https://github.com/IIT-PAVIS/ReId_without_Id"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "sensor_resolution": "640x480",
        "num_subjects": "33",
        "num_sensors": "4",
        "stereo": true
    },
    "bibtex": {
        "pages": "66964--66980",
        "year": 2024,
        "author": "Ahmad, Shafiq and Morerio, Pietro and Del Bue, Alessio",
        "journal": "IEEE Access",
        "urldate": "2024-12-15",
        "language": "en",
        "doi": "10.1109/ACCESS.2024.3399539",
        "url": "https://ieeexplore.ieee.org/document/10528297/",
        "shorttitle": "Event {Anonymization}",
        "issn": "2169-3536",
        "copyright": "https://creativecommons.org/licenses/by/4.0/legalcode",
        "volume": "12",
        "title": "Event {Anonymization}: {Privacy}-{Preserving} {Person} {Re}-{Identification} and {Pose} {Estimation} in {Event}-{Based} {Vision}",
        "type": "article",
        "key": "ahmad_event_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/WACVW54805.2022.00052",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-642-33863-2_43",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV.2016.7477561",
            "source": "crossref"
        },
        {
            "doi": "10.1109/DICTA.2012.6411689",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00217",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.01027",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01953",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00482",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICPR48806.2021.9412340",
            "source": "crossref"
        },
        {
            "doi": "10.3390/s21134320",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.01251",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00364",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-019-01209-w",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.90",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19772-7_19",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00257",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICPR.2010.579",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19778-9_30",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2020.00587",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v34i04.5891",
            "source": "crossref"
        },
        {
            "doi": "10.24963/ijcai.2021/240",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00190",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00568",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2022.3145053",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8593805",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-018-1106-2",
            "source": "crossref"
        },
        {
            "doi": "10.3390/s18103471",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00345",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2019.8702581",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2963386",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00150",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00186",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIP.2017.8297089",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-20071-7_30",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00256",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3026709",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01390",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2021.3054775",
            "source": "crossref"
        },
        {
            "doi": "10.1109/DSC54232.2022.9888863",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00358",
            "source": "crossref"
        },
        {
            "title": "Towards privacy-preserving person re-identification via person identify shift",
            "source": "crossref"
        }
    ]
}
---

### Dataset Description

Event-ReId is the first person re-identification dataset captured from event cameras. It has recordings from four indoor 640x480 pixel event cameras and the files have event streams recorded from 33 persons, each person walking in the four event-camera views.

**Note:** Dataset was collected using [Prophesee](https://www.prophesee.ai/) event cameras

### Dataset Structure

- Identities: 33
- Cameras: 4
- Bounding Boxes: 16K
- Label method: Hand+Yolo

### Format & Structure

Event-ReId provides event streams in text format (.txt). Each row in the events.txt file contains four values (timestamp, x, y, polarity) except the first row, which has two values, width and height (event-camera resolution). The event streams are arranged in the folder Event_ReId/ according to the following structure:

- (ID)/(camera_number)/(file_name).txt --> _(e.g. 008/cam03/events.txt)_

### Labels/BBOX

The event camera outputs an asynchronous event stream. However, for bounding box annotation, event timestamps must be synchronized. Therefore, we annotate an event stream of a fixed time duration of 33.3ms (synchronized with RGB camera of 30 FPS). As a result, each bbox coincides with a time window _**T**_ (= 33.3ms) of the event and the total time duration of each event is 3-4 sec.

You can find each event stream file's corresponding bounding box labels in the directory e.g., _008/cam03/labels/_ in'.json' format. The label.json file contains two points of the box (the top-left _(x1,y1)_ and bottom-right _(x2,y2)_ corners) and frame number, e.g., _\[[x1, y1, x2, y2], f_num\]_.

- Note: we have cleaned/removed the events lying outside the bounding box; you can use the following two-line code for extracting bbox.

  ```bash
        """ 640x480 => bbox"""
        events[:, 1] = events[:, 1] - min(events[:, 1]) # x - x_min
        events[:, 2] = events[:, 2] - min(events[:, 2]) # y - y_min
  ```

### Train and Test IDs

We split train and test Ids as follows:

```bash
Train Ids = [001, 003, 004, 006, 007, 009, 010, 012, 013, 015, 016, 018, 019, 021, 022, 024, 025, 027, 028, 030, 031, 033]

Test Ids = [002, 005, 008, 011, 014, 017, 020, 023, 026, 029, 032]
```

### Event-Partition & Generate Voxel-grid:

Use this script to generate an event voxel-grid from the event stream. We can generate voxel-grid either by accumulating events in a fixed time duration _T_ or accumulating a fixed number _N_ of events; we call it a constant time voxel-grid or constant count voxel-grid, respectively.

Voxel-grid generates in two steps:

First, run the [event_partition.py](https://github.com/IIT-PAVIS/PReId_wo_Id/tree/main/data) script to partition the whole event stream (events.txt) into small chunks of event stream and then, during training, each small chunk will be converted into event voxel-grid using function *events_to_voxel_grid(events, num_bins, width, height)* in our dataloader.py script.

```bash
python event_partition.py \
      --input_dir     ${path to dataset} \
      --out_dir       ${path to output dataset} \
      --event_accumc  ${constant time or count voxel-grid} \
      --time_duration ${fixed time duration}\
      --event_count   ${fixed number of events}
```

You should get:

```bash
	   +-- out_dir/Event_ReId/001/
	   | cam01/
	   |       +-- 001_c1_001.txt
	   |       +-- 001_c1_002.txt
	   |       +-- 001_c1_002.txt
	   | cam02/
	   |       +-- 001_c2_001.txt
	   |       +-- 001_c2_002.txt
	   |       +-- 001_c2_002.txt
	   | ...
```

Sourced and adapted from https://github.com/IIT-PAVIS/ReId_without_Id/blob/main/data/README.md
