---
{
    "name": "LLE-DAVIS",
    "aliases": [
        "LLE-VOS",
        "LLE-VOS-Dataset",
        "LLE-vas"
    ],
    "year": 2024,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346",
        "ESIM"
    ],
    "other_sensors": [],
    "category": "Object Detection, Classification, and Tracking",
    "tags": [
        "Object Segmentation"
    ],
    "description": "Object Segmentation",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "OneDrive"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "OneDrive",
                "url": "https://mailustceducn-my.sharepoint.com/:f:/g/personal/lihebei_mail_ustc_edu_cn/EglLfpidmBhKqVsOQS91SaQBCsQ21LP6wwjevJVL7fyDSQ",
                "format": "Numpy",
                "available": false
            }
        ],
        "size_gb": 24.5,
        "size_type": "Uncompressed"
    },
    "paper": {
        "title": "Event-Assisted Low-Light Video Object Segmentation",
        "doi": "10.1109/CVPR52733.2024.00313",
        "authors": [
            "Hebei Li",
            "Jin Wang",
            "Jiahui Yuan",
            "Yue Li",
            "Wenming Weng",
            "Yansong Peng",
            "Yueyi Zhang",
            "Zhiwei Xiong",
            "Xiaoyan Sun"
        ],
        "abstract": "In the realm of video object segmentation (VOS), the challenge of operating under low-light conditions persists, resulting in notably degraded image quality and compromised accuracy when comparing query and memory frames for similarity computation. Event cameras, characterized by their high dynamic range and ability to capture motion information of objects, offer promise in enhancing object visibility and aiding VOS methods under such low-light conditions. This paper introduces a pioneering framework tai-lored for low-light VOS, leveraging event camera data to elevate segmentation accuracy. Our approach hinges on two pivotal components: the Adaptive Cross-Modal Fusion (ACMF) module, aimed at extracting pertinent features while fusing image and event modalities to mitigate noise interference, and the Event-Guided Memory Matching (EGMM) module, designed to rectify the issue of in-accurate matching prevalent in low-light settings. Additionally, we present the creation of a synthetic LLE-DAVIS dataset and the curation of a real-world LLE-vas dataset, encompassing frames and events. Experimental evaluations corroborate the efficacy of our method across both datasets, affirming its effectiveness in low-light scenarios. The datasets are available at https://github.com/HebeiFast/EventLowLightVOS.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 7,
            "updated": "2025-06-21T13:04:32.658069"
        },
        {
            "source": "scholar",
            "count": 11,
            "updated": "2025-06-21T13:04:31.832744"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2404.01945"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10655659"
        },
        {
            "type": "github_page",
            "url": "https://github.com/HebeiFast/EventLowLightVOS"
        }
    ],
    "full_name": "Low Light Event Dataset (LLE)",
    "additional_metadata": {
        "num_recordings": "70",
        "stereo": false
    },
    "bibtex": {
        "pages": "3250--3259",
        "year": 2024,
        "month": "jun",
        "author": "Li, Hebei and Wang, Jin and Yuan, Jiahui and Li, Yue and Weng, Wenming and Peng, Yansong and Zhang, Yueyi and Xiong, Zhiwei and Sun, Xiaoyan",
        "publisher": "IEEE",
        "booktitle": "2024 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} ({CVPR})",
        "urldate": "2024-12-08",
        "language": "en",
        "doi": "10.1109/CVPR52733.2024.00313",
        "url": "https://ieeexplore.ieee.org/document/10655659/",
        "isbn": "9798350353006",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "Event-{Assisted} {Low}-{Light} {Video} {Object} {Segmentation}",
        "address": "Seattle, WA, USA",
        "type": "inproceedings",
        "key": "li_event-assisted_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPRW.2019.00205",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.565",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00940",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19815-1_37",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00364",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00185",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.336",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TMM.2023.3290432",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00139",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.00974",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v37i2.25257",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-021-01466-8",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00953",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.01442",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00770",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00932",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.372",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-20071-7_15",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58542-6_38",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01265",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ROBIO58561.2023.10354658",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00734",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19830-4_20",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSII.2018.2824899",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2017.2745098",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.01972",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00125",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v36i3.20200",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00568",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58523-5_39",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.79",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCVW54120.2021.00135",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-023-01754-5",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2021.3124580",
            "source": "crossref"
        },
        {
            "title": "Rethinking space-time networks with improved memory coverage for efficient video object segmentation",
            "source": "crossref"
        },
        {
            "title": "Decoupling features in hierarchical propagation for video object segmentation",
            "source": "crossref"
        },
        {
            "title": "Associating objects with transformers for video object segmentation",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

The LLE-VOS dataset includes 70 videos, consisting of paired normal and low-light videos, along with their corresponding segmentation annotations and event streams. The videos are recorded at a diverse range of locations, including gyms, playgrounds, classrooms, meeting rooms, and zoos.
