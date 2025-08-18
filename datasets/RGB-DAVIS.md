---
{
    "name": "RGB-DAVIS",
    "aliases": [
        "GEF"
    ],
    "year": 2020,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS240"
    ],
    "other_sensors": [
        "PointGrey Chameleon3"
    ],
    "category": "Filtering and De-noising",
    "subcategory": [
        "De-noising",
        "Beamsplitters",
        "Frame Prediction",
        "Motion Compensation",
        "Monitor Conversion"
    ],
    "task": "Frame/Event Fusion (filtering and fusion)",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Dropbox"
        ],
        "file_formats": [
            "Unknown"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Dropbox",
                "url": "https://www.dropbox.com/scl/fo/ruaiz2sc2eqkv0naso1dg/ALzY7GY_ccIyoI7fZvARK2Q?rlkey=40jh9qb13f3d3j7safemhkyyy&st=k995pra5&dl=0",
                "format": "Unknown",
                "available": true
            }
        ],
        "size_gb": 14.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Joint Filtering of Intensity Images and Neuromorphic Events for High-Resolution Noise-Robust Imaging",
        "doi": "10.1109/CVPR42600.2020.00168",
        "authors": [
            "Zihao W. Wang",
            "Peiqi Duan",
            "Oliver Cossairt",
            "Aggelos Katsaggelos",
            "Tiejun Huang",
            "Boxin Shi"
        ],
        "abstract": "We present a novel computational imaging system with high resolution and low noise. Our system consists of a traditional video camera which captures high-resolution intensity images, and an event camera which encodes high-speed motion as a stream of asynchronous binary events. To process the hybrid input, we propose a unifying framework that \ufb01rst bridges the two sensing modalities via a noise-robust motion compensation model, and then performs joint image \ufb01ltering. The \ufb01ltered output represents the temporal gradient of the captured space-time volume, which can be viewed as motion-compensated event frames with high resolution and low noise. Therefore, the output can be widely applied to many existing event-based algorithms that are highly dependent on spatial resolution and noise robustness. In experimental results performed on both publicly available datasets as well as our new RGB-DAVIS dataset, we show systematic performance improvement in applications such as high frame-rate video synthesis, feature/corner detection and tracking, as well as high dynamic range image reconstruction.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 76,
            "updated": "2025-06-13T11:50:32.464555"
        },
        {
            "source": "scholar",
            "count": 113,
            "updated": "2025-06-13T11:50:28.537937"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://openaccess.thecvf.com/content_CVPR_2020/papers/Wang_Joint_Filtering_of_Intensity_Images_and_Neuromorphic_Events_for_High-Resolution_CVPR_2020_paper.pdf"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9156457"
        },
        {
            "type": "project_page",
            "url": "https://sites.google.com/view/guided-event-filtering"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "sensor_resolution": "180x190",
        "stereo": false
    },
    "bibtex": {
        "pages": "1606--1616",
        "year": 2020,
        "month": "jun",
        "author": "Wang, Zihao W. and Duan, Peiqi and Cossairt, Oliver and Katsaggelos, Aggelos and Huang, Tiejun and Shi, Boxin",
        "publisher": "IEEE",
        "booktitle": "2020 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} ({CVPR})",
        "urldate": "2024-04-13",
        "language": "en",
        "doi": "10.1109/CVPR42600.2020.00168",
        "url": "https://ieeexplore.ieee.org/document/9156457/",
        "isbn": "978-1-72817-168-5",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "title": "Joint {Filtering} of {Intensity} {Images} and {Neuromorphic} {Events} for {High}-{Resolution} {Noise}-{Robust} {Imaging}",
        "address": "Seattle, WA, USA",
        "type": "inproceedings",
        "key": "wang_joint_2020"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPR.2011.5995542",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LGRS.2017.2755679",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2011.6126423",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00698",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00398",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-017-1050-6",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACVW50321.2020.9096944",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2020.00135",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2014.6942940",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2018.00118",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MSP.2016.2602099",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46493-0_10",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00399",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2015.7168735",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2017.151",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00568",
            "source": "crossref"
        },
        {
            "doi": "10.1364/OE.21.010526",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2016.7759610",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2793357",
            "source": "crossref"
        },
        {
            "doi": "10.1016/1047-3203(90)90007-I",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.sigpro.2019.07.026",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2013.194",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCI.2020.2964255",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCVW.2019.00532",
            "source": "crossref"
        },
        {
            "doi": "10.1364/OE.25.000250",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00652",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01032",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00176",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCPHOT.2009.5559006",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-642-15549-9_8",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00180",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2012.213",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.dsp.2017.09.010",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TETC.2017.2788865",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2013.2273537",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV.2016.7477561",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00210",
            "source": "crossref"
        },
        {
            "doi": "10.1109/BIOROB.2016.7523452",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00161",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00407",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISSCC.2017.7870263",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00734",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.22.116",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2015.389",
            "source": "crossref"
        },
        {
            "doi": "10.1117/1.JEI.28.6.063012",
            "source": "crossref"
        },
        {
            "title": "High speed and high dynamic range video with an event camera",
            "source": "crossref"
        },
        {
            "title": "Unsupervised learning of a hierarchical spiking neural network for optical flow estimation: From events to global motion perception",
            "source": "crossref"
        },
        {
            "title": "Davis camera optical flow",
            "source": "crossref"
        },
        {
            "title": "Asynchronous, photometric feature tracking using events and frames",
            "source": "crossref"
        },
        {
            "title": "Eklt: Asynchronous photometric feature tracking using events and frames",
            "source": "crossref"
        },
        {
            "title": "Evaluation of event-based algorithms for optical flow with ground-truth from inertial measurement sensor",
            "source": "crossref"
        },
        {
            "title": "Mutually guided image filtering",
            "source": "crossref"
        },
        {
            "title": "Real-time 3D reconstruction and 6-DoF tracking with an event camera",
            "source": "crossref"
        },
        {
            "title": "Using photographs to enhance videos of a static scene",
            "source": "crossref"
        },
        {
            "title": "Multimodal image super-resolution via joint sparse representations induced by coupled dictionaries",
            "source": "crossref"
        },
        {
            "title": "Compressive video sampling",
            "source": "crossref"
        },
        {
            "title": "Fast image reconstruction with an event camera",
            "source": "crossref"
        }
    ]
}
---


### Dataset Structure 

### Dataset Structure 
- Dataset has a sensor (DAVIS240C) resolution of 180x190 pixels