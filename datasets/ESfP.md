---
{
    "name": "ESfP",
    "aliases": [],
    "year": 2025,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4",
        "ESIM"
    ],
    "other_sensors": [],
    "category": "Domain Specific Application",
    "tags": [
        "Polarization",
        "Shape Tracking",
        "3D Pose Estimation"
    ],
    "description": "Shape from polarisation",
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
            "HDF5"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://rpg.ifi.uzh.ch/esfp.html",
                "format": "HDF5",
                "available": true
            }
        ],
        "size_gb": 5.18,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Event-based Shape from Polarization",
        "doi": "10.1109/CVPR52729.2023.00155",
        "authors": [
            "Manasi Muglikar",
            "Leonard Bauersfeld",
            "Diederik Paul Moeys",
            "Davide Scaramuzza"
        ],
        "abstract": "State-of-the-art solutions for Shape-from-Polarization (SfP) suffer from a speed-resolution tradeoff: they either sacrifice the number of polarization angles measured or necessitate lengthy acquisition times due to framerate constraints, thus compromising either accuracy or latency. We tackle this tradeoff using event cameras. Event cameras operate at microseconds resolution with negligible motion blur, and output a continuous stream of events that precisely measures how light changes over time asynchronously. We propose a setup that consists of a linear polarizer rotating at high speeds in front of an event camera. Our method uses the continuous event stream caused by the rotation to reconstruct relative intensities at multiple polarizer angles. Experiments demonstrate that our method outperforms physics-based baselines using frames, reducing the MAE by 25\\% in synthetic and real-world datasets. In the real world, we observe, however, that the challenging conditions (i.e., when few events are generated) harm the performance of physics-based solutions. To overcome this, we propose a learning-based approach that learns to estimate surface normals even at low event-rates, improving the physics-based approach by 52\\% on the real world dataset. The proposed system achieves an acquisition speed equivalent to 50 fps ({\\textgreater}twice the framerate of the commercial polarization sensor) while retaining the spatial resolution of 1MP. Our evaluation is based on the first large-scale dataset for event-based SfP.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 17,
            "updated": "2025-07-14T08:00:09.917579"
        },
        {
            "source": "scholar",
            "count": 36,
            "updated": "2025-07-14T08:00:09.510020"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/pdf/2301.06855"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10203064"
        },
        {
            "type": "project_page",
            "url": "https://rpg.ifi.uzh.ch/esfp.html"
        }
    ],
    "full_name": "Event Shape-from-Polarization (ESfP)",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "1547--1556",
        "year": 2023,
        "month": "jun",
        "author": "Muglikar, Manasi and Bauersfeld, Leonard and Moeys, Diederik Paul and Scaramuzza, Davide",
        "publisher": "IEEE",
        "booktitle": "2023 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} ({CVPR})",
        "urldate": "2024-04-13",
        "language": "en",
        "doi": "10.1109/CVPR52729.2023.00155",
        "url": "https://ieeexplore.ieee.org/document/10203064/",
        "isbn": "9798350301298",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "Event-{Based} {Shape} from {Polarization}",
        "address": "Vancouver, BC, Canada",
        "type": "inproceedings",
        "key": "muglikar_event-based_2023"
    },
    "referenced_papers": [
        {
            "doi": "10.1016/j.cviu.2017.04.014",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s00138-018-0962-7",
            "source": "crossref"
        },
        {
            "doi": "10.1109/iccv.2005.160",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2006.871114",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3272127.3275018",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3386569.3392387",
            "source": "crossref"
        },
        {
            "doi": "10.1117/3.626141",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA46639.2022.9811809",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2001.937570",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-51866-0",
            "source": "crossref"
        },
        {
            "doi": "10.1109/isscc19947.2020.9063149",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV53792.2021.00030",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-012-0546-3",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV50981.2020.00063",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2015.385",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-017-1025-7",
            "source": "crossref"
        },
        {
            "doi": "10.48550/arXiv.1406.3269",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00182",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01230",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIP.2012.6467223",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01229",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2003.1238455",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2004.1261080",
            "source": "crossref"
        },
        {
            "doi": "10.1117/1.OE.56.4.041303",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV53792.2021.00124",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV53792.2021.00048",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2015.7298844",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2010.2085952",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2001.990468",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2963386",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-24574-4_28",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2001.990493",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2005.79",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2018.2868065",
            "source": "crossref"
        },
        {
            "doi": "10.1364/OL.37.004218",
            "source": "crossref"
        },
        {
            "doi": "10.1109/iscas45731.2020.9180436",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01723",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58517-4_22",
            "source": "crossref"
        },
        {
            "doi": "10.1016/S0262-8856(96)01123-7",
            "source": "crossref"
        },
        {
            "doi": "10.1364/OE.424457",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-11024-6_54",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00777",
            "source": "crossref"
        },
        {
            "title": "Division of focal plane asynchronous polarization imager",
            "source": "crossref"
        },
        {
            "title": "ESIM: an open event camera simulator",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

There are 2 datasets used: ESfP-synthetic Dataset and ESFfP-Real Dataset.

The synthetic dataset consist of events which were stimulated using ESIM. The dataset consists of 89 training and 15 test sequences.

The real Dataset consists of a total of 90 scenes.
