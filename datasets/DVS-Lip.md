---
{
    "name": "DVS-Lip",
    "aliases": [],
    "year": 2022,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "subcategory": [
        "Lip-reading"
    ],
    "task": "Lip Reading",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/file/d/1dBEgtmctTTWJlWnuWxFtk8gfOdVVpkQ0/view",
                "format": "Numpy",
                "available": true
            }
        ],
        "size_gb": 1.7,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Multi-grained Spatio-Temporal Features Perceived Network for Event-based Lip-Reading",
        "doi": "10.1109/CVPR52688.2022.01946",
        "authors": [
            "Ganchao Tan",
            "Yang Wang",
            "Han Han",
            "Yang Cao",
            "Feng Wu",
            "Zheng-Jun Zha"
        ],
        "abstract": "Automatic lip-reading (ALR) aims to recognize words using visual information from the speaker\u2019s lip movements. In this work, we introduce a novel type of sensing device, event cameras, for the task of ALR. Event cameras have both technical and application advantages over conventional cameras for the ALR task because they have higher temporal resolution, less redundant visual information, and lower power consumption. To recognize words from the event data, we propose a novel Multi-grained Spatio-Temporal Features Perceived Network (MSTP) to perceive fine-grained spatio-temporal features from microsecond time-resolved event data. Specifically, a multibranch network architecture is designed, in which different grained spatio-temporal features are learned by operating at different frame rates. The branch operating on the low frame rate can perceive spatial complete but temporal coarse features. While the branch operating on the high frame rate can perceive spatial coarse but temporal refinement features. And a message flow module is devised to integrate the features from different branches, leading to perceiving more discriminative spatio-temporal features. In addition, we present the first event-based lip-reading dataset (DVS-Lip) captured by the event camera. Experimental results demonstrated the superiority of the proposed model compared to the state-of-the-art event-based action recognition models and video-based lip-reading models.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 29,
            "updated": "2025-07-11T21:17:24.527590"
        },
        {
            "source": "scholar",
            "count": 40,
            "updated": "2025-07-11T21:17:24.151860"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://openaccess.thecvf.com/content/CVPR2022/papers/Tan_Multi-Grained_Spatio-Temporal_Features_Perceived_Network_for_Event-Based_Lip-Reading_CVPR_2022_paper.pdf"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9879993"
        },
        {
            "type": "project_page",
            "url": "https://sites.google.com/view/event-based-lipreading"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_classes": "100",
        "num_subjects": "40",
        "num_male": "20",
        "num_female": "20",
        "num_recordings": "19871",
        "stereo": false
    },
    "bibtex": {
        "pages": "20062--20071",
        "year": 2022,
        "month": "jun",
        "author": "Tan, Ganchao and Wang, Yang and Han, Han and Cao, Yang and Wu, Feng and Zha, Zheng-Jun",
        "publisher": "IEEE",
        "booktitle": "2022 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} ({CVPR})",
        "urldate": "2023-10-26",
        "language": "en",
        "doi": "10.1109/CVPR52688.2022.01946",
        "url": "https://ieeexplore.ieee.org/document/9879993/",
        "isbn": "978-1-66546-946-3",
        "title": "Multi-grained {Spatio}-{Temporal} {Features} {Perceived} {Network} for {Event}-based {Lip}-{Reading}",
        "address": "New Orleans, LA, USA",
        "type": "inproceedings",
        "key": "tan_multi-grained_2022"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPR46437.2021.01589",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00698",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01627",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.74",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-11755-3_3",
            "source": "crossref"
        },
        {
            "doi": "10.1109/34.982900",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MSP.2015.116",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.90",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00768",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01345",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3474085.3475220",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICASSP40776.2020.9053841",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.367",
            "source": "crossref"
        },
        {
            "doi": "10.1097/AUD.0b013e31812f7185",
            "source": "crossref"
        },
        {
            "doi": "10.1121/1.2229005",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s10844-016-0438-z",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00630",
            "source": "crossref"
        },
        {
            "doi": "10.1109/FG.2015.7163155",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.781",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2020.3023597",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3394171.3413623",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.502",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "doi": "10.1109/FG.2019.8756582",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV.2019.00199",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2021.3054886",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00652",
            "source": "crossref"
        },
        {
            "title": "Slayer: Spike layer error reassignment in time",
            "source": "crossref"
        },
        {
            "title": "High speed and high dynamic range video with an event camera",
            "source": "crossref"
        },
        {
            "title": "Point-net++: Deep hierarchical feature learning on point sets in a metric space",
            "source": "crossref"
        },
        {
            "title": "Cuave: A new audio-visual database for multimodal human-computer interface research",
            "source": "crossref"
        },
        {
            "title": "Large-scale visual speech recognition",
            "source": "crossref"
        },
        {
            "title": "Xm2vtsdb: The extended m2vts database",
            "source": "crossref"
        },
        {
            "title": "Audio visual speech recognition",
            "source": "crossref"
        },
        {
            "title": "Lrs3-ted: a large-scale dataset for visual speech recog-nition",
            "source": "crossref"
        },
        {
            "title": "Adam: A method for stochastic optimization",
            "source": "crossref"
        },
        {
            "title": "Sgdr: Stochastic gradient descent with warm restarts",
            "source": "crossref"
        },
        {
            "title": "Lip reading in the wild",
            "source": "crossref"
        },
        {
            "title": "The challenge of mul-tispeaker lip-reading",
            "source": "crossref"
        },
        {
            "title": "Spatiotemporal residual networks for video action recognition",
            "source": "crossref"
        },
        {
            "title": "Learn an effective lip reading model without pains",
            "source": "crossref"
        },
        {
            "title": "Event-based vision: A survey",
            "source": "crossref"
        },
        {
            "title": "End-to-end learning of repre-sentations for asynchronous event-based data",
            "source": "crossref"
        },
        {
            "title": "Lipnet: End-to-end sentence-level lipreading",
            "source": "crossref"
        },
        {
            "title": "Empirical evaluation of gated recurrent neural networks on sequence modeling",
            "source": "crossref"
        },
        {
            "title": "Deformation flow based two-stream net-work for lip reading",
            "source": "crossref"
        },
        {
            "title": "Wang. Action-net: Multipath excitation for action recognition",
            "source": "crossref"
        },
        {
            "title": "Vi-tae: Vision transformer advanced by exploring intrinsic in-ductive bias",
            "source": "crossref"
        },
        {
            "title": "Visualizing data using t-sne",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Contains 100 different words
- Contains data from [40] subjects (20 male and 20 female)
- Contains a total of 19871 recordings in total
