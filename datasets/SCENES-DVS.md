---
{
    "name": "SCENES-DVS",
    "aliases": [],
    "year": 2019,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Sensitive DVS"
    ],
    "other_sensors": [],
    "category": "Object Detection, Classification, and Tracking",
    "subcategory": [
        "None"
    ],
    "task": "Scene Context Classification",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "aedat"
        ],
        "availability_comment": "Dataset files appear to be unavailable",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "http://www2.imse-cnm.csic.es/caviar/SCENES_DVS/",
                "format": "aedat",
                "available": false
            }
        ],
        "size_gb": 0.32,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Scene Context Classification with Event-Driven Spiking Deep Neural Networks",
        "doi": "10.1109/ICECS.2018.8617982",
        "authors": [
            "Pablo Negri",
            "Miguel Soto",
            "Bernabe Linares-Barranco",
            "Teresa Serrano-Gotarredona"
        ],
        "abstract": "Event-Driven computation is attracting growing attention among researchers for several reasons. On one hand, the availability of new bio-inspired retina-like vision sensors that provide spiking outputs, like the Dynamic Vision Sensor (DVS) make it possible to demonstrate energy ef\ufb01cient and highspeed complex vision tasks. On the other hand, the emergence of abundant new nanoscale devices that operate as tunable two-terminal resistive elements, which when operated through dynamic pulsing techniques emulate learning and processing in the brain, promise an explosion of highly compact energy ef\ufb01cient neuromorphic event-driven applications. In this paper we focus for the \ufb01rst time on a high-level cognitive task, namely scene context classi\ufb01cation, performed by event-driven computations and using real sensory data from a DVS camera.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 4,
            "updated": "2025-06-15T10:47:29.570477"
        },
        {
            "source": "scholar",
            "count": 5,
            "updated": "2025-06-15T10:47:29.442589"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/8617982"
        },
        {
            "type": "project_page",
            "url": "http://www2.imse-cnm.csic.es/neuromorphs/index.php/SCENES-DVS-Database"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "569--572",
        "year": 2018,
        "month": "dec",
        "author": "Negri, Pablo and Soto, Miguel and Linares-Barranco, Bernabe and Serrano-Gotarredona, Teresa",
        "publisher": "IEEE",
        "booktitle": "2018 25th {IEEE} {International} {Conference} on {Electronics}, {Circuits} and {Systems} ({ICECS})",
        "urldate": "2024-04-13",
        "language": "en",
        "doi": "10.1109/ICECS.2018.8617982",
        "url": "https://ieeexplore.ieee.org/document/8617982/",
        "isbn": "978-1-5386-9562-3",
        "title": "Scene {Context} {Classification} with {Event}-{Driven} {Spiking} {Deep} {Neural} {Networks}",
        "address": "Bordeaux",
        "type": "inproceedings",
        "key": "negri_scene_2018"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/JSSC.2012.2230553",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2010.2085952",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISSCC.2017.7870263",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2017.00350",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2017.8050397",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-7908-2604-3_16",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2017.8050403",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2013.71",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CAIVD.1998.646032",
            "source": "crossref"
        },
        {
            "title": "A $128{}^{\\ast}128$ 120db 15us latency asynchronous temporal contrast vision sensor",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

The SCENES-DVS database consists of DVS recordings of urban scenes. The dataset was recorded by different people handling a DVS sensor during long hikes in an urban environment. The sequences exceeded 15 minutes long and included indoor and outdoor environments. The records were split in small sequences of 50ms. The sequences were categorized in four classes: `street´, `bridge´, `stairs´ and `corridor´. `street´ and `bridge´ classes correspond to indoor scenes, while `stairs´ and `corridor´ correspond to outdoor ones.

### Dataset Files

| File                                                                              | Size   |
| --------------------------------------------------------------------------------- | ------ |
| [bridge.tar.gz](http://www2.imse-cnm.csic.es/caviar/SCENES_DVS/bridge.tar.gz)     | 166 MB |
| [corridor.tar.gz](http://www2.imse-cnm.csic.es/caviar/SCENES_DVS/corridor.tar.gz) | 94 MB  |
| [stairs.tar.gz](http://www2.imse-cnm.csic.es/caviar/SCENES_DVS/stairs.tar.gz)     | 56 MB  |
| [street.tar.gz](http://www2.imse-cnm.csic.es/caviar/SCENES_DVS/street.tar.gz)     | 187 MB |
