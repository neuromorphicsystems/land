---
{
    "name": "Brebion2021",
    "aliases": [],
    "year": 2021,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "subcategory": [
        "Optical Flow"
    ],
    "task": "Optical Flow Estimation for a Driving Dataset",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": false,
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
                "url": "https://datasets.hds.utc.fr/experiment/14",
                "format": "ROSbag",
                "available": true
            }
        ],
        "size_gb": 6.56,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Real-Time Optical Flow for Vehicular Perception With Low- and High-Resolution Event Cameras",
        "doi": "10.1109/TITS.2021.3136358",
        "authors": [
            "Vincent Brebion",
            "Julien Moreau",
            "Franck Davoine"
        ],
        "abstract": "Event cameras capture changes of illumination in the observed scene rather than accumulating light to create images. Thus, they allow for applications under high-speed motion and complex lighting conditions, where traditional framebased sensors show their limits with blur and over- or underexposed pixels. Thanks to these unique properties, they represent nowadays an highly attractive sensor for ITS-related applications. Event-based optical \ufb02ow (EBOF) has been studied following the rise in popularity of these neuromorphic cameras. The recent arrival of high-de\ufb01nition neuromorphic sensors, however, challenges the existing approaches, because of the increased resolution of the events pixel array and a much higher throughput. As an answer to these points, we propose an optimized framework for computing optical \ufb02ow in real-time with both low- and high-resolution event cameras. We formulate a novel dense representation for the sparse events \ufb02ow, in the form of the \u201cinverse exponential distance surface\u201d. It serves as an interim frame, designed for the use of proven, state-of-the-art frame-based optical \ufb02ow computation methods. We evaluate our approach on both low- and high-resolution driving sequences, and show that it often achieves better results than the current state of the art, while also reaching higher frame rates, 250Hz at 346 \u00d7 260 pixels and 77Hz at 1280 \u00d7 720 pixels.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 19,
            "updated": "2025-07-12T10:29:57.110241"
        },
        {
            "source": "scholar",
            "count": 42,
            "updated": "2025-07-12T10:29:56.753629"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2112.10591"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9662996"
        },
        {
            "type": "project_page",
            "url": "https://datasets.hds.utc.fr/project/7"
        }
    ],
    "full_name": "High-Speed High-Definition Event-Based Indoor Dataset 2021",
    "additional_metadata": {
        "ground_truth": "no",
        "scene_types": "Indoor",
        "num_classes": "4"
    },
    "bibtex": {
        "pages": "15066--15078",
        "year": 2022,
        "month": "sep",
        "author": "Brebion, Vincent and Moreau, Julien and Davoine, Franck",
        "journal": "IEEE Transactions on Intelligent Transportation Systems",
        "urldate": "2024-04-13",
        "number": "9",
        "language": "en",
        "doi": "10.1109/TITS.2021.3136358",
        "url": "https://ieeexplore.ieee.org/document/9662996/",
        "issn": "1524-9050, 1558-0016",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "volume": "23",
        "title": "Real-{Time} {Optical} {Flow} for {Vehicular} {Perception} {With} {Low}- and {High}-{Resolution} {Event} {Cameras}",
        "type": "article",
        "key": "brebion_real-time_2022"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1016/0004-3702(81)90024-2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IVS.2006.1689672",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIEV.2016.7760081",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CCDC.2017.7979301",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s00530-020-00662-9",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISPA.2000.914892",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2013.2273537",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3010468",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2017.7989517",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.2986748",
            "source": "crossref"
        },
        {
            "doi": "10.15607/rss.2018.xiv.062",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00345",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISSCC19947.2020.9063149",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2012.6248074",
            "source": "crossref"
        },
        {
            "doi": "10.5201/ipol.2013.20",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2016.2532928",
            "source": "crossref"
        },
        {
            "doi": "10.1006/cviu.1996.0006",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-013-0644-x",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2015.316",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v32i1.12276",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58536-5_24",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00407",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00638",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2903179",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.2.23",
            "source": "crossref"
        },
        {
            "doi": "10.3390/s21041150",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58526-6_22",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV53792.2021.00030",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00174",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00176",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-20873-8_20",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58583-9_32",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2963386",
            "source": "crossref"
        },
        {
            "doi": "10.1145/356683.356687",
            "source": "crossref"
        },
        {
            "doi": "10.3390/app10062024",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2800793",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00573",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS45743.2020.9341224",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA40945.2020.9197248",
            "source": "crossref"
        },
        {
            "title": "Optical flow based real-time moving object detection in unconstrained scenes",
            "source": "crossref"
        },
        {
            "title": "Scalable scene flow from point clouds in the real world",
            "source": "crossref"
        },
        {
            "title": "An iterative image registration technique with an application to stereo vision",
            "source": "crossref"
        },
        {
            "title": "Pyramidal implementation of the Lucas Kanade feature tracker",
            "source": "crossref"
        },
        {
            "title": "Simultaneous optical flow and segmentation (SOFAS) using dynamic vision sensor",
            "source": "crossref"
        },
        {
            "title": "Self-supervised learning of event-based optical flow with spiking neural networks",
            "source": "crossref"
        },
        {
            "title": "Frame-free dynamic digital vision",
            "source": "crossref"
        },
        {
            "title": "Distances discr\u00e8tes",
            "source": "crossref"
        },
        {
            "title": "Robust incremental optical flow",
            "source": "crossref"
        },
        {
            "title": "Learning to detect objects with a 1 megapixel event camera",
            "source": "crossref"
        },
        {
            "title": "Adaptive time-slice block-matching optical flow algorithm for dynamic vision sensors",
            "source": "crossref"
        }
    ]
}
---


### Dataset Structure 


- Dataset has no optical flow ground truth.
- Contains onlyIndoor scenes.
- Contains 4 different types of scenes.