---
{
    "name": "Ev-REDS",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [
        "FLIR Blackfly S"
    ],
    "category": "Filtering and De-noising",
    "tags": [
        "Beamsplitters",
        "De-blurring"
    ],
    "description": "Event-based Motion De-blurring",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "OneDrive"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "OneDrive",
                "url": "https://1drv.ms/u/s!AgjOZB4WHoLei2muGp13XErEWUje?e=UEX6PC",
                "format": "Numpy",
                "available": true
            }
        ],
        "size_gb": 24.3,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Generalizing Event-Based Motion Deblurring in Real-World Scenarios",
        "doi": "10.1109/ICCV51070.2023.00985",
        "authors": [
            "Xiang Zhang",
            "Lei Yu",
            "Wen Yang",
            "Jianzhuang Liu",
            "Gui-Song Xia"
        ],
        "abstract": "Event-based motion deblurring has shown promising results by exploiting low-latency events. However, current approaches are limited in their practical usage, as they assume the same spatial resolution of inputs and specific blurriness distributions. This work addresses these limitations and aims to generalize the performance of event-based de-blurring in real-world scenarios. We propose a scale-aware network that allows flexible input spatial scales and enables learning from different temporal scales of motion blur. A two-stage self-supervised learning scheme is then developed to fit real-world data distribution. By utilizing the relativity of blurriness, our approach efficiently ensures the restored brightness and structure of latent images and further generalizes deblurring performance to handle varying spatial and temporal scales of motion blur in a self-distillation manner. Our method is extensively evaluated, demonstrating remarkable performance, and we also introduce a real-world dataset consisting of multi-scale blurry frames and events to facilitate research in event-based deblurring.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 18,
            "updated": "2025-06-15T10:40:44.092084"
        },
        {
            "source": "scholar",
            "count": 35,
            "updated": "2025-06-15T10:40:43.930329"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2308.05932"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10377319"
        },
        {
            "type": "github_page",
            "url": "https://github.com/XiangZ-0/GEM"
        }
    ],
    "full_name": "Multi-Scale Real-world Blurry Dataset (MS-RBD)",
    "additional_metadata": {
        "num_recordings": "32",
        "stereo": false
    },
    "bibtex": {
        "pages": "10700--10710",
        "year": 2023,
        "month": "oct",
        "author": "Zhang, Xiang and Yu, Lei and Yang, Wen and Liu, Jianzhuang and Xia, Gui-Song",
        "publisher": "IEEE",
        "booktitle": "2023 {IEEE}/{CVF} {International} {Conference} on {Computer} {Vision} ({ICCV})",
        "urldate": "2024-12-19",
        "language": "en",
        "doi": "10.1109/ICCV51070.2023.00985",
        "url": "https://ieeexplore.ieee.org/document/10377319/",
        "isbn": "9798350307184",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "Generalizing {Event}-{Based} {Motion} {Deblurring} in {Real}-{World} {Scenarios}",
        "address": "Paris, France",
        "type": "inproceedings",
        "key": "zhang_generalizing_2023"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPR52688.2022.00587",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCPHOT.2018.8368468",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00852",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01263",
            "source": "crossref"
        },
        {
            "doi": "10.1145/1141911.1141956",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2022.3224051",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00364",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00569",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19781-9_36",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00663",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19797-0_30",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.cviu.2020.103134",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2011.5995521",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00251",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.180",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00698",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2963386",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00765",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19797-0_24",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01589",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58601-0_10",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01044",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACSSC.2003.1292216",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-642-15549-9_12",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2023.3240397",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2022.3227448",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-022-01633-5",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01401",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01724",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2021.3116135",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2022.3230727",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00953",
            "source": "crossref"
        },
        {
            "title": "Are high-resolution event cameras really needed?",
            "source": "crossref"
        },
        {
            "title": "Adam: A method for stochastic optimization",
            "source": "crossref"
        },
        {
            "title": "SGDR: Stochastic Gradient Descent with Warm Restarts",
            "source": "crossref"
        },
        {
            "title": "Motion deblur-ring with real events",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Contains 32 sequences, comprising 22 indoor scenes and 10 outdoor scenes

## MS-RBD capture system

| Scene   | Sequence   | Train/Test | #Event (K) | FPS | Dynamic/Static | Camera Motion |
| ------- | ---------- | ---------- | ---------- | --- | -------------- | ------------- |
| Indoor  | Badminton  | Train      | 8096       | 15  | Static         | Rotation      |
|         | Book       | Train      | 12128      | 15  | Static         | Rotation      |
|         | Book2      | Train      | 3647       | 15  | Dynamic        | No motion     |
|         | Card       | Train      | 3351       | 15  | Static         | No motion     |
|         | Chinese    | Train      | 13584      | 15  | Static         | No motion     |
|         | Cube       | Train      | 2026       | 15  | Dynamic        | No motion     |
|         | Cube2      | Train      | 6114       | 15  | Dynamic        | No motion     |
|         | Cylinders  | Train      | 9119       | 15  | Static         | Rotation      |
|         | Cylinders2 | Train      | 11389      | 15  | Static         | Random        |
|         | Desk       | Train      | 7703       | 15  | Static         | Rotation      |
|         | English    | Train      | 6582       | 15  | Dynamic        | Rotation      |
|         | Game2      | Train      | 7751       | 15  | Static         | Rotation      |
|         | Printer    | Train      | 6312       | 15  | Static         | Rotation      |
|         | Printer2   | Train      | 8809       | 15  | Static         | Random        |
|         | Tools      | Train      | 7193       | 15  | Static         | Rotation      |
|         | Toys       | Train      | 4765       | 15  | Static         | Rotation      |
|         | Toys2      | Train      | 6422       | 15  | Static         | Random        |
|         | Bag        | Test       | 9892       | 15  | Dynamic        | No motion     |
|         | Balls      | Test       | 5182       | 15  | Static         | Rotation      |
|         | Balls2     | Test       | 5622       | 15  | Static         | Random        |
|         | Chessboard | Test       | 5574       | 15  | Dynamic        | No motion     |
|         | Game       | Test       | 7075       | 15  | Static         | Random        |
| Outdoor | Bike       | Train      | 6810       | 30  | Static         | Random        |
|         | Poster     | Train      | 1328       | 30  | Static         | Rotation      |
|         | Poster2    | Train      | 3070       | 15  | Static         | Random        |
|         | Road       | Train      | 2732       | 15  | Dynamic        | Rotation      |
|         | Road2      | Train      | 2888       | 15  | Dynamic        | Rotation      |
|         | Street     | Train      | 3198       | 30  | Dynamic        | Random        |
|         | Text       | Train      | 1158       | 15  | Static         | Rotation      |
|         | Building   | Test       | 3066       | 15  | Static         | Rotation      |
|         | Dog        | Test       | 2026       | 15  | Static         | Rotation      |
|         | Mall       | Test       | 4403       | 30  | Static         | Random        |
