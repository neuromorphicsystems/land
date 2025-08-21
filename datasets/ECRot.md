---
{
    "name": "ECRot",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DVXplorer",
        "ESIM"
    ],
    "other_sensors": [],
    "category": "Visual Navigation",
    "tags": [
        "SLAM",
        "Contrast Maximization",
        "Visual Place Recognition"
    ],
    "description": "Rotational motion estimation",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "ROSbag"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://github.com/tub-rip/ECRot",
                "format": "ROSbag",
                "available": true
            }
        ],
        "size_gb": 13.5,
        "size_type": "Uncompressed"
    },
    "paper": {
        "title": "CMax-SLAM: Event-Based Rotational-Motion Bundle Adjustment and SLAM System Using Contrast Maximization",
        "doi": "10.1109/TRO.2024.3378443",
        "authors": [
            "Shuang Guo",
            "Guillermo Gallego"
        ],
        "abstract": "Event cameras are bioinspired visual sensors that capture pixelwise intensity changes and output asynchronous event streams. They show great potential over conventional cameras to handle challenging scenarios in robotics and computer vision, such as high speed and high dynamic range. This article considers the problem of rotational motion estimation using event cameras. Several event-based rotation estimation methods have been developed in the past decade, but their performance has not been evaluated and compared under unified criteria yet. In addition, these prior works do not consider a global refinement step. To this end, we conduct a systematic study of this problem with two objectives in mind: Summarizing previous works and presenting our own solution. First, we compare prior works both theoretically and experimentally. Second, we propose the first event-based rotation-only bundle adjustment (BA) approach. We formulate it leveraging the state-of-the-art contrast maximization (CMax) framework, which is principled and avoids the need to convert events into frames. Third, we use the proposed BA to build CMax-simultaneous localization and mapping (SLAM), the first event-based rotation-only SLAM system comprising a front-end and a back-end. Our BA is able to run both offline (trajectory smoothing) and online (CMax-SLAM back-end). To demonstrate the performance and versatility of our method, we present comprehensive experiments on synthetic and real-world datasets, including indoor, outdoor, and space scenarios. We discuss the pitfalls of real-world evaluation and propose a proxy for the reprojection error as the figure of merit to evaluate event-based rotation BA methods. We release the source code and novel data sequences to benefit the community. We hope this work leads to a better understanding and fosters further research on event-based egomotion estimation.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 18,
            "updated": "2025-06-30T10:54:10.047548"
        },
        {
            "source": "scholar",
            "count": 35,
            "updated": "2025-06-30T10:54:09.731902"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2403.08119"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10474186"
        },
        {
            "type": "github_page",
            "url": "https://github.com/tub-rip/ECRot"
        }
    ],
    "full_name": "Event Camera Rotation Dataset (ECRot)",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "2442--2461",
        "year": 2024,
        "author": "Guo, Shuang and Gallego, Guillermo",
        "journal": "IEEE Transactions on Robotics",
        "urldate": "2024-12-15",
        "language": "en",
        "doi": "10.1109/TRO.2024.3378443",
        "url": "https://ieeexplore.ieee.org/document/10474186/",
        "shorttitle": "{CMax}-{SLAM}",
        "issn": "1552-3098, 1941-0468",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "volume": "40",
        "title": "{CMax}-{SLAM}: {Event}-{Based} {Rotational}-{Motion} {Bundle} {Adjustment} and {SLAM} {System} {Using} {Contrast} {Maximization}",
        "type": "article",
        "key": "guo_cmax-slam_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/isscc19947.2020.9063149",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ROBIO.2012.6491077",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2017.2769655",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2016.2647639",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2019.8794255",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00151",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-642-39402-7_14",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46466-4_21",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2016.2645143",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCPHOT.2017.7951488",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.616",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2018.2858287",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2793357",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2021.3062252",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS47612.2022.9981970",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2022.3187266",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3088793",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2016.2624754",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00407",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01256",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00734",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00638",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58558-7_10",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58574-7_4",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01324",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2021.3130049",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2021.3124580",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2021.3053243",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19797-0_36",
            "source": "crossref"
        },
        {
            "doi": "10.1002/aisy.202200221",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-25056-9_1",
            "source": "crossref"
        },
        {
            "doi": "10.1002/aisy.202200251",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISMAR.2007.4538852",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01258",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2022.3230727",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2017.2658577",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58583-9_32",
            "source": "crossref"
        },
        {
            "doi": "10.3390/s22145190",
            "source": "crossref"
        },
        {
            "doi": "10.1007/3-540-44480-7_21",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-015-0811-3",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.01116",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-017-1050-6",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2016.2597321",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2012.6385773",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8593941",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.31.33",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LSP.2012.2227726",
            "source": "crossref"
        },
        {
            "doi": "10.1109/NCC.2015.7084843",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s40295-018-00140-5",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSEN.2020.3009687",
            "source": "crossref"
        },
        {
            "doi": "10.1117/1.OE.61.8.085105",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00208",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV45572.2020.9093309",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-012-0601-0",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "title": "High-speed event camera tracking",
            "source": "crossref"
        },
        {
            "title": "Simultaneous mosaicing and tracking with an event camera",
            "source": "crossref"
        },
        {
            "title": "Adaptive time-slice block-matching optical flow algorithm for dynamic vision sensors",
            "source": "crossref"
        },
        {
            "title": "Curve global interpolation",
            "source": "crossref"
        },
        {
            "title": "ESIM: An open event camera simulator",
            "source": "crossref"
        },
        {
            "title": "Real-time visual SLAM with an event camera",
            "source": "crossref"
        },
        {
            "title": "Variational image processing algorithms for the stereoscopic space-time reconstruction of water waves",
            "source": "crossref"
        },
        {
            "title": "Event-based camera pose tracking using a generative event model",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure
