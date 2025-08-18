---
{
    "name": "EVIMO1",
    "aliases": [],
    "year": 2020,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [
        "Vicon"
    ],
    "category": "Object Detection, Classification, and Tracking",
    "subcategory": [
        "Multiple Object Tracking",
        "Object Tracking"
    ],
    "task": "Motion segmentation",
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
            "ROSbag",
            "Numpy",
            "CSV"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://better-flow.github.io/evimo/download_evimo.html",
                "format": "ROSbag",
                "available": false
            }
        ],
        "size_gb": 31.0,
        "size_type": "Uncompressed"
    },
    "paper": {
        "title": "EV-IMO: Motion Segmentation Dataset and Learning Pipeline for Event Cameras",
        "doi": "10.1109/IROS40897.2019.8968520",
        "authors": [
            "Anton Mitrokhin",
            "Chengxi Ye",
            "Cornelia Fermuller",
            "Yiannis Aloimonos",
            "Tobi Delbruck"
        ],
        "abstract": "We present the \ufb01rst event-based learning approach for motion segmentation in indoor scenes and the \ufb01rst eventbased dataset \u2013 EV-IMO \u2013 which includes accurate pixelwise motion masks, egomotion and ground truth depth. Our approach is based on an ef\ufb01cient implementation of the SfM learning pipeline using a low parameter neural network architecture on event data. In addition to camera egomotion and a dense depth map, the network estimates independently moving object segmentation at the pixel-level and computes per-object 3D translational velocities of moving objects. We also train a shallow network with just 40k parameters, which is able to compute depth and egomotion.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 71,
            "updated": "2025-07-02T08:32:26.259795"
        },
        {
            "source": "scholar",
            "count": 125,
            "updated": "2025-07-02T08:32:25.869671"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/1903.07520"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/8968520"
        },
        {
            "type": "project_page",
            "url": "https://better-flow.github.io/evimo/"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "total_duration": "30 minutes",
        "stereo": false
    },
    "connected_datasets": [
        "EVIMO2"
    ],
    "bibtex": {
        "pages": "6105--6112",
        "year": 2019,
        "month": "nov",
        "author": "Mitrokhin, Anton and Ye, Chengxi and Fermuller, Cornelia and Aloimonos, Yiannis and Delbruck, Tobi",
        "publisher": "IEEE",
        "booktitle": "2019 {IEEE}/{RSJ} {International} {Conference} on {Intelligent} {Robots} and {Systems} ({IROS})",
        "urldate": "2023-09-05",
        "language": "en",
        "doi": "10.1109/IROS40897.2019.8968520",
        "url": "https://ieeexplore.ieee.org/document/8968520/",
        "shorttitle": "{EV}-{IMO}",
        "isbn": "978-1-72814-004-9",
        "title": "{EV}-{IMO}: {Motion} {Segmentation} {Dataset} and {Learning} {Pipeline} for {Event} {Cameras}",
        "address": "Macau, China",
        "type": "inproceedings",
        "key": "mitrokhin_ev-imo_2019"
    },
    "referenced_papers": [
        {
            "doi": "10.1007/978-3-642-39402-7_14",
            "source": "crossref"
        },
        {
            "doi": "10.1007/BF00137442",
            "source": "crossref"
        },
        {
            "doi": "10.1109/EBCCSP.2016.7605086",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2003.1211411",
            "source": "crossref"
        },
        {
            "doi": "10.1098/rsta.1998.0224",
            "source": "crossref"
        },
        {
            "doi": "10.1007/BF01418980",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00031",
            "source": "crossref"
        },
        {
            "doi": "10.1023/A:1008177429387",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s004220050393",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2015.7299035",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2012.6247883",
            "source": "crossref"
        },
        {
            "doi": "10.1109/34.683770",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCPHOT.2017.7951488",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2011.11.001",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2005.123",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2013.2273537",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00137",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00060",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2007.1049",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2013.6696456",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JPROC.2014.2347207",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2018.XIV.062",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2017.8050295",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2016.7758089",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00212",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8593805",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00594",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.616",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIP.1995.537713",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.700",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2015.7139876",
            "source": "crossref"
        },
        {
            "title": "Deep3d: Fully automatic 2dto-3d video conversion with deep convolutional neural networks",
            "source": "crossref"
        },
        {
            "title": "Simultaneous localization and mapping for event-based vision systems",
            "source": "crossref"
        },
        {
            "title": "Layered segmentation and optical flow estimation over time",
            "source": "crossref"
        },
        {
            "title": "Learning depth from single monocular images",
            "source": "crossref"
        },
        {
            "title": "Learning depth from monocular videos using direct methods",
            "source": "crossref"
        },
        {
            "title": "Event-based, 6-dof camera tracking for high-speed applications",
            "source": "crossref"
        },
        {
            "title": "Unsupervised cnn for single view depth estimation: Geometry to the rescue",
            "source": "crossref"
        },
        {
            "title": "Simultaneous mosaicing and tracking with an event camera",
            "source": "crossref"
        },
        {
            "title": "U-net: Convolutional Networks for Biomedical Image Segmentation",
            "source": "crossref"
        },
        {
            "title": "Bio-inspired motion estimation with event-driven sensors",
            "source": "crossref"
        },
        {
            "title": "Depth map prediction from a single image using a multi-scale deep network",
            "source": "crossref"
        },
        {
            "title": "Real-time 3d reconstruction and 6-dof tracking with an event camera",
            "source": "crossref"
        },
        {
            "title": "Unsupervised learning of dense optical flow, depth and egomotion from sparse event data",
            "source": "crossref"
        }
    ]
}
---


### Dataset Structure 

- Total recording time  is approximately 30 minutes
- Up to 3 independently moving objects objects
- Multiple types of scenes (varying backgrounds and motion speeds)