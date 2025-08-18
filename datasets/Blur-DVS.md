---
{
    "name": "Blur-DVS",
    "aliases": [],
    "year": 2020,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS240"
    ],
    "other_sensors": [],
    "category": "Filtering and De-noising",
    "subcategory": [
        "De-blurring"
    ],
    "task": "Image de-blurring",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "",
        "dataset_links": []
    },
    "paper": {
        "title": "Learning Event-Based Motion Deblurring",
        "doi": "10.1109/CVPR42600.2020.00338",
        "authors": [
            "Zhe Jiang",
            "Yu Zhang",
            "Dongqing Zou",
            "Jimmy Ren",
            "Jiancheng Lv",
            "Yebin Liu"
        ],
        "abstract": "Recovering sharp video sequence from a motion-blurred image is highly ill-posed due to the significant loss of motion information in the blurring process. For event-based cameras, however, fast motion can be captured as events at high frame rate, raising new opportunities to exploring effective solutions. In this paper, we start from a sequential formulation of event-based motion deblurring, then show how its optimization can be unfolded with a novel end-toend deep architecture. The proposed architecture is a convolutional recurrent neural network that integrates visual and temporal knowledge of both global and local scales in principled manner. To further improve the reconstruction, we propose a differentiable directional event filtering module to effectively extract rich boundary prior from the evolution of events. We conduct extensive experiments on the synthetic GoPro dataset and a large newly introduced dataset captured by a DAVIS240C camera. The proposed approach achieves state-of-the-art reconstruction quality, and generalizes better to handling real-world motion blur.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 138,
            "updated": "2025-06-09T09:44:32.845981"
        },
        {
            "source": "scholar",
            "count": 188,
            "updated": "2025-06-09T09:44:32.009325"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2004.05794"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9156741"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "3317--3326",
        "year": 2020,
        "month": "jun",
        "author": "Jiang, Zhe and Zhang, Yu and Zou, Dongqing and Ren, Jimmy and Lv, Jiancheng and Liu, Yebin",
        "publisher": "IEEE",
        "booktitle": "2020 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} ({CVPR})",
        "urldate": "2024-12-18",
        "language": "en",
        "doi": "10.1109/CVPR42600.2020.00338",
        "url": "https://ieeexplore.ieee.org/document/9156741/",
        "isbn": "978-1-72817-168-5",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "title": "Learning {Event}-{Based} {Motion} {Deblurring}",
        "address": "Seattle, WA, USA",
        "type": "inproceedings",
        "key": "Jiang2020"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPR.2013.84",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.494",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00698",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.739",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.123",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00398",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.122",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-66709-6_6",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.180",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.356",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00786",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.478",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-018-1106-2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8593805",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.509",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.35",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00613",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2015.7298943",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01231-1_27",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.300",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00267",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00407",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.405",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2011.6126276",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.632",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00938",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00663",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2013.392",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.102",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.271",
            "source": "crossref"
        },
        {
            "doi": "10.1145/1618452.1618491",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2421636.2421641",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2015.316",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46487-9_45",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.738",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2015.7298677",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.34",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00853",
            "source": "crossref"
        },
        {
            "title": "Continuous-time intensity estimation using event cameras",
            "source": "crossref"
        },
        {
            "title": "ESIM: an open event camera simulator",
            "source": "crossref"
        },
        {
            "title": "Long-term object tracking with a moving event camera",
            "source": "crossref"
        },
        {
            "title": "Adaptive time-slice block-matching optical flow algorithm for dynamic vision sensors",
            "source": "crossref"
        },
        {
            "title": "Blind deblurring using internal patch recurrence",
            "source": "crossref"
        },
        {
            "title": "Non-uniform camera shake removal using a spatially-adaptive sparse penalty",
            "source": "crossref"
        },
        {
            "title": "Learning blind video temporal consistency",
            "source": "crossref"
        },
        {
            "title": "The Nadaraya-Watson Kernel regression function estimator",
            "source": "crossref"
        },
        {
            "title": "A neural approach to blind motion deblurring",
            "source": "crossref"
        },
        {
            "title": "Fast motion deblurring",
            "source": "crossref"
        },
        {
            "title": "Two-phase kernel estimation for robust motion deblurring",
            "source": "crossref"
        },
        {
            "title": "Convolutional LSTM network: A machine learning approach for precipitation nowcasting",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure
