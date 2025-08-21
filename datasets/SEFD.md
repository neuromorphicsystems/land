---
{
    "name": "SEFD",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Custom Simulator"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Face Detection"
    ],
    "description": "Face Detection",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "IEEE Dataport"
        ],
        "file_formats": [
            "CSV"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "IEEE Dataport",
                "url": "https://ieee-dataport.org/documents/face-detection-dataset-programmable-threshold-based-sparse-vision",
                "format": "CSV",
                "available": true
            }
        ],
        "size_gb": 0.345,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Descriptor: Smart Event Face Dataset (SEFD)",
        "doi": "10.1109/IEEEDATA.2024.3485026",
        "authors": [
            "Riadul Islam",
            "Sri Ranga Sai Krishna Tummala",
            "Joey Mul\u00e9",
            "Rohith Kankipati",
            "Suraj Jalapally",
            "Dhandeep Challagundla",
            "Chad Howard",
            "Ryan Robucci"
        ],
        "abstract": "Smart focal-plane and in-chip image processing has emerged as a crucial technology for vision-enabled embedded systems with energy efficiency and privacy. However, the lack of special datasets providing examples of the data that these neuromorphic sensors compute to convey visual information has hindered the adoption of these promising technologies. Neuromorphic imager variants, including event-based sensors, produce various representations such as streams of pixel addresses representing time and locations of intensity changes in the focal plane, temporal-difference data, data sifted/thresholded by temporal differences, image data after applying spatial transformations, optical flow data, and/or statistical representations. To address the critical barrier to entry, we provide an annotated, temporal-threshold-based vision dataset specifically designed for face detection tasks derived from the same videos used for Aff-Wild2. By offering multiple threshold levels (e.g., 4, 8, 12, and 16), this dataset allows for comprehensive evaluation and optimization of state-of-the-art neural architectures under varying conditions and settings compared to traditional methods. The accompanying tool flow for generating event data from raw videos further enhances accessibility and usability. We anticipate that this resource will significantly support the development of robust vision systems based on smart sensors that can process based on temporal-difference thresholds, enabling more accurate and efficient object detection and localization and ultimately promoting the broader adoption of low-power, neuromorphic imaging technologies. To support further research, we publicly released the dataset at https://dx.doi.org/10.21227/bw2e-dj78.",
        "open_access": true
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 1,
            "updated": "2025-06-12T13:57:57.844837"
        },
        {
            "source": "scholar",
            "count": 2,
            "updated": "2025-06-12T13:57:57.648631"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2410.00368"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10732017"
        },
        {
            "type": "github_page",
            "url": "https://github.com/riaduli/Thresholded_event_vision_face_dataset"
        }
    ],
    "full_name": "Smart Event Face Dataset (SEFD)",
    "additional_metadata": {
        "source_dataset": "Aff-Wild2",
        "num_recordings": "298",
        "num_subjects": "200",
        "total_duration": "15 hours",
        "stereo": false
    },
    "bibtex": {
        "pages": "33--40",
        "year": 2024,
        "author": "Islam, Riadul and Tummala, Sri Ranga Sai Krishna and Mul\u00e9, Joey and Kankipati, Rohith and Jalapally, Suraj and Challagundla, Dhandeep and Howard, Chad and Robucci, Ryan",
        "journal": "IEEE Data Descriptions",
        "urldate": "2024-12-15",
        "language": "en",
        "doi": "10.1109/IEEEDATA.2024.3485026",
        "url": "https://ieeexplore.ieee.org/document/10732017/",
        "shorttitle": "Descriptor",
        "issn": "2995-4274",
        "copyright": "https://creativecommons.org/licenses/by/4.0/legalcode",
        "volume": "1",
        "title": "Descriptor: {Smart} {Event} {Face} {Dataset} ({SEFD})",
        "type": "article",
        "key": "islam_descriptor_2024-1"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/ICRA.2016.7487657",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.781",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2018.2858287",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TETC.2018.2872000",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JEDS.2022.3148087",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TVLSI.2018.2837681",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSI.2020.3012980",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSII.2020.3029203",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CJECE.2019.2895047",
            "source": "crossref"
        },
        {
            "doi": "10.1109/tpami.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00437",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.596",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2015.425",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00481",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1117/12.919787",
            "source": "crossref"
        },
        {
            "doi": "10.1117/12.919584",
            "source": "crossref"
        },
        {
            "doi": "10.1109/isscc42615.2023.10067566",
            "source": "crossref"
        },
        {
            "doi": "10.1117/12.2177350",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2023.3240646",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.00483",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2017.8050295",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3546790.3546805",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICARA56516.2023.10125817",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.91",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.00721",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW50498.2020.00203",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.01079",
            "source": "crossref"
        },
        {
            "title": "Evaluation of Haar cascade classifiers designed for face detection",
            "source": "crossref"
        },
        {
            "title": "FDDB: A benchmark for face detection in unconstrained settings",
            "source": "crossref"
        },
        {
            "title": "Adaptive time-slice block-matching optical flow algorithm for dynamic vision sensors",
            "source": "crossref"
        },
        {
            "title": "ESIM: An open event camera simulator",
            "source": "crossref"
        },
        {
            "title": "v2e: From video frames to realistic DVS events",
            "source": "crossref"
        },
        {
            "title": "YOLOv4: Optimal speed and accuracy of object detection",
            "source": "crossref"
        },
        {
            "title": "MobileNets: Efficient convolutional neural networks for mobile vision applications",
            "source": "crossref"
        },
        {
            "title": "Aff-wild2: Extending the Aff-wild database for affect recognition",
            "source": "crossref"
        },
        {
            "title": "Roboflow (version 1.0) [software]",
            "source": "crossref"
        }
    ]
}
---

### ### Dataset Structure

- Converted from Aff-Wild2
- A custom frame-differencing technique as used (outlined in paper)
- Contains 298 from 200 subjects
- Contains approximately 15 hours of data## Dataset: SEFD
