---
{
    "name": "PEDRo",
    "aliases": [],
    "year": 2023,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "subcategory": [
        "Person Detection",
        "Pedestrian Detection"
    ],
    "task": "Person Detection",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Zenodo"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Zenodo",
                "url": "https://zenodo.org/records/13331985",
                "format": "Numpy",
                "available": true,
                "doi": "10.5281/zenodo.7823799"
            }
        ],
        "size_gb": 6.5,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "PEDRo: an Event-based Dataset for Person Detection in Robotics",
        "doi": "10.1109/CVPRW59228.2023.00426",
        "authors": [
            "Chiara Boretti",
            "Philippe Bich",
            "Fabio Pareschi",
            "Luciano Prono",
            "Riccardo Rovatti",
            "Gianluca Setti"
        ],
        "abstract": "Event-based cameras are devices based on neuromorphic sensors that are gaining popularity in different fields, including robotics. They are suitable for tasks where high-speed, low-latency, low-power operations are required. Person detection is one of these, to allow mobile robots to monitor areas and navigate in crowded environments. Most of the available event-based datasets that contain annotated human figures and collected with a moving camera are designed for autonomous driving tasks. Yet, robotic tasks are certainly not limited to the recognition of pedestrians walking on sidewalks, which makes the above datasets of limited utility. To address this impasse, we introduce a new dataset called PEDRo, which is fully manually labeled. This dataset has been specifically developed for person detection and it counts a total number of 43259 bounding boxes included in 119 recordings. A moving DAVIS346 event-based camera has been used to collect events in a large variety of indoor and outdoor scenarios with various lighting and meteorological conditions (such as sunny, rainy and snowy). To the best of our knowledge, this is now the largest available dataset for event-based person detection, which has been recorded with a moving camera and manually labeled.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 12,
            "updated": "2025-07-12T09:24:12.855265"
        },
        {
            "source": "scholar",
            "count": 24,
            "updated": "2025-07-12T09:24:12.577134"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://openaccess.thecvf.com/content/CVPR2023W/EventVision/papers/Boretti_PEDRo_An_Event-Based_Dataset_for_Person_Detection_in_Robotics_CVPRW_2023_paper.pdf"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10208992"
        },
        {
            "type": "github_page",
            "url": "https://github.com/SSIGPRO/PEDRo-Event-Based-Dataset"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "119",
        "average_duration": "18 seconds",
        "num_bounding_boxes": "43259",
        "num_samples": "27000",
        "sample_duration": "40 ms"
    },
    "bibtex": {
        "pages": "4065--4070",
        "year": 2023,
        "month": "jun",
        "author": "Boretti, Chiara and Bich, Philippe and Pareschi, Fabio and Prono, Luciano and Rovatti, Riccardo and Setti, Gianluca",
        "publisher": "IEEE",
        "booktitle": "2023 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} {Workshops} ({CVPRW})",
        "urldate": "2024-09-21",
        "language": "en",
        "doi": "10.1109/CVPRW59228.2023.00426",
        "url": "https://ieeexplore.ieee.org/document/10208992/",
        "shorttitle": "{PEDRo}",
        "isbn": "9798350302493",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "{PEDRo}: an {Event}-based {Dataset} for {Person} {Detection} in {Robotics}",
        "address": "Vancouver, BC, Canada",
        "type": "inproceedings",
        "key": "boretti_pedro_2023"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/LRA.2016.2645143",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV53792.2021.00030",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS51168.2021.9636448",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA40945.2020.9197341",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2017.8050397",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s00138-012-0450-4",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00437",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00364",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2010.2085952",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2017.XIII.035",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58517-4_6",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ITSC45102.2020.9294515",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2021.3066529",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00144",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00405",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICME.2019.00242",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA46639.2022.9811805",
            "source": "crossref"
        },
        {
            "doi": "10.1109/5.726791",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2018.XIV.062",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISSCC.2006.1696265",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS45743.2020.9341224",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2793357",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2800793",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2020.2972839",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8593805",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnbot.2019.00038",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2018.2858287",
            "source": "crossref"
        },
        {
            "doi": "10.1126/scirobotics.aaz9712",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-009-0275-4",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2006.79",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MSP.2020.2985815",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00149",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TITS.2020.3022921",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA46639.2022.9812059",
            "source": "crossref"
        },
        {
            "title": "ESIM: an Open Event Camera Simulator",
            "source": "crossref"
        },
        {
            "title": "Learning to Detect Objects with a 1 Megapixel Event Camera",
            "source": "crossref"
        },
        {
            "title": "DDD17: End-To-End DAVIS Driving Dataset",
            "source": "crossref"
        },
        {
            "title": "Reducing the Sim-to-Real Gap for Event Cameras",
            "source": "crossref"
        },
        {
            "title": "Microsoft coco: Common objects in context",
            "source": "crossref"
        },
        {
            "title": "The Visual Object Tracking VOT2015 Challenge Results",
            "source": "crossref"
        },
        {
            "title": "A Large Scale Event-based Detection Dataset for Automotive",
            "source": "crossref"
        }
    ]
}
---


### Dataset Structure 
- Contains 119 recordings with an average duration of 18 seconds.
- Contains 43259 bounding boxes for 27000 samples of 40 ms each.

- Dataset format is provided.
-