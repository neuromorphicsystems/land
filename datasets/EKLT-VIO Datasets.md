---
{
    "name": "EKLT-VIO Datasets",
    "aliases": [],
    "year": 2022,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS240"
    ],
    "other_sensors": [],
    "category": "Visual Navigation",
    "subcategory": [
        "Space Datasets",
        "Visual Odometry"
    ],
    "task": "Visual Odometry",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "ROSbag"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://uzh-rpg.github.io/eklt-vio/",
                "format": "ROSbag",
                "available": true
            }
        ],
        "size_gb": 26.9,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Exploring Event Camera-based Odometry for Planetary Robots",
        "doi": "10.1109/LRA.2022.3187826",
        "authors": [
            "Florian Mahlknecht",
            "Daniel Gehrig",
            "Jeremy Nash",
            "Friedrich M. Rockenbauer",
            "Benjamin Morrell",
            "Jeff Delaune",
            "Davide Scaramuzza"
        ],
        "abstract": "Due to their resilience to motion blur and high robustness in low-light and high dynamic range conditions, event cameras are poised to become enabling sensors for vision-based exploration on future Mars helicopter missions. However, existing event-based visual-inertial odometry (VIO) algorithms either suffer from high tracking errors or are brittle, since they cannot cope with signi\ufb01cant depth uncertainties caused by an unforeseen loss of tracking or other effects. In this work, we introduce EKLT-VIO, which addresses both limitations by combining a state-of-the-art event-based frontend with a \ufb01lter-based backend. This makes it both accurate and robust to uncertainties, outperforming eventand frame-based VIO algorithms on challenging benchmarks by 32\\%. In addition, we demonstrate accurate performance in hoverlike conditions (outperforming existing event-based methods) as well as high robustness in newly collected Mars-like and highdynamic-range sequences, where existing frame-based methods fail. In doing so, we show that event-based VIO is the way forward for vision-based exploration on Mars.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 47,
            "updated": "2025-07-14T08:15:51.806703"
        },
        {
            "source": "scholar",
            "count": 70,
            "updated": "2025-07-14T08:15:51.262735"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/pdf/2204.05880"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9813406"
        },
        {
            "type": "project_page",
            "url": "https://uzh-rpg.github.io/eklt-vio/"
        },
        {
            "type": "github_page",
            "url": "https://github.com/jpl-x/x_evaluate"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "8651--8658",
        "year": 2022,
        "month": "oct",
        "author": "Mahlknecht, Florian and Gehrig, Daniel and Nash, Jeremy and Rockenbauer, Friedrich M. and Morrell, Benjamin and Delaune, Jeff and Scaramuzza, Davide",
        "journal": "IEEE Robotics and Automation Letters",
        "urldate": "2024-04-13",
        "number": "4",
        "language": "en",
        "doi": "10.1109/LRA.2022.3187826",
        "url": "https://ieeexplore.ieee.org/document/9813406/",
        "issn": "2377-3766, 2377-3774",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "volume": "7",
        "title": "Exploring {Event} {Camera}-{Based} {Odometry} for {Planetary} {Robots}",
        "type": "article",
        "key": "mahlknecht_exploring_2022"
    },
    "referenced_papers": [
        {
            "doi": "10.7551/mitpress/9816.003.0036",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2013.IX.037",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2018.2853729",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2016.2597321",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2793357",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2020.3048875",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11214-017-0465-2",
            "source": "crossref"
        },
        {
            "doi": "10.2514/6.2019-1411",
            "source": "crossref"
        },
        {
            "doi": "10.1002/rob.20184",
            "source": "crossref"
        },
        {
            "doi": "10.1109/AERO47225.2020.9172289",
            "source": "crossref"
        },
        {
            "doi": "10.1089/ast.2020.2237",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3058918",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.616",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2013.6696807",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-019-01209-w",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2018.8460664",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ROBOT.2007.364024",
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
            "doi": "10.5244/C.31.16",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1007/11744023_34",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2012.6225147",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2018.2858287",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2022.3143303",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364914538326",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2021.3049445",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2006.II.011",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2017.2769655",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV.2019.00038",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2963386",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2015.7353389",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2021.3075644",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA40945.2020.9196524",
            "source": "crossref"
        },
        {
            "title": "The lander vision system for mars 2020 entry descent and landing",
            "source": "crossref"
        },
        {
            "title": "Mars astrobiological cave and internal habitability explorer (MACIE): A new frontiers mission concept",
            "source": "crossref"
        },
        {
            "title": "xVIO: A range-visual-inertial odometry framework",
            "source": "crossref"
        },
        {
            "title": "Surviving an in-flight anomaly: What happened on ingenuitys sixth flight",
            "source": "crossref"
        },
        {
            "title": "An iterative image registration technique with an application to stereo vision",
            "source": "crossref"
        },
        {
            "title": "Ceres solver",
            "source": "crossref"
        }
    ]
}
---


### Dataset Structure