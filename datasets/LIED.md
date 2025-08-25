---
{
    "name": "LIED",
    "aliases": [],
    "year": 2023,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Filtering and De-noising",
    "tags": [
        "Light Interference Removal"
    ],
    "description": "Light interference removal",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "IEEE Dataport",
            "Google Drive"
        ],
        "file_formats": [
            "aedat"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "IEEE Dataport",
                "url": "https://ieee-dataport.org/documents/light-interference-event-dataset",
                "format": "aedat",
                "available": true
            },
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/drive/folders/1ZR7PVGOUy9accqPIGM2zCWcwzFW0XgiG",
                "format": "aedat",
                "available": true
            }
        ],
        "size_gb": 3.9,
        "size_type": "Uncompressed"
    },
    "paper": {
        "title": "Identifying Light Interference in Event-Based Vision",
        "doi": "10.1109/TCSVT.2023.3335457",
        "authors": [
            "Chenyang Shi",
            "Yuzhen Li",
            "Ningfang Song",
            "Boyi Wei",
            "Yibo Zhang",
            "Wenzhuo Li",
            "Jing Jin"
        ],
        "abstract": "Light interference negatively impacts on frame-based visual tasks. Phenomena such as overexposure cause the loss of valuable information and reduce task execution efficiency. Event cameras are neuromorphic vision sensors that output sparse, asynchronous streams of events rather than frames. These cameras feature high temporal resolution, high dynamic range, and low power consumption. As a result, they are not susceptible to overexposure and motion blur, and they are able to recognize light interference such as strobe lights, stray lights, and reflections. However, event cameras are highly sensitive to light intensity changes, so light interference still affects event cameras as noise which easily alias with events triggered by environmental objects. Therefore, to reduce or eliminate the negative impact of light interference on event cameras, we systematically analyze the optical properties and event-triggering principles of these forms of light interference, and then propose ELIR (Event-based Light Interference Removal) method for removing light interference signals in event streams under static and dynamic scenes. The proposed method is validated in object detection tasks. Additionally, we launch the LIED datasets to evaluate the effect of light interference removal in event streams to assist with other studies in this field. Experimental results on the LIED datasets show that our proposed method can remove, on average, over 97% of light interference in static scenes, over 86% in dynamic scenes. Finally, the proposed method is verified on the object detection task, achieving an average PRE over 92%. The dataset is available at https://github.com/shicy17/LIED .",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 2,
            "updated": "2025-06-08T13:51:38.283001"
        },
        {
            "source": "scholar",
            "count": 5,
            "updated": "2025-06-08T13:51:37.451210"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10325523"
        },
        {
            "type": "github_page",
            "url": "https://github.com/shicy17/LIED"
        }
    ],
    "full_name": "Light Interference Event Dataset (LIED)",
    "additional_metadata": {
        "num_recordings": "30"
    },
    "bibtex": {
        "pages": "4800--4816",
        "year": 2024,
        "month": "jun",
        "author": "Shi, Chenyang and Li, Yuzhen and Song, Ningfang and Wei, Boyi and Zhang, Yibo and Li, Wenzhuo and Jin, Jing",
        "journal": "IEEE Transactions on Circuits and Systems for Video Technology",
        "urldate": "2024-09-11",
        "number": "6",
        "language": "en",
        "doi": "10.1109/TCSVT.2023.3335457",
        "url": "https://ieeexplore.ieee.org/document/10325523/",
        "issn": "1051-8215, 1558-2205",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "volume": "34",
        "title": "Identifying {Light} {Interference} in {Event}-{Based} {Vision}",
        "type": "article",
        "key": "Shi2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/TCSVT.2021.3135337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00904",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIP46576.2022.9897679",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00595",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2021.3054886",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2021.3130049",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCVW54120.2021.00103",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TVCG.2021.3067784",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2022.3228168",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA46639.2022.9812003",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2021.3086598",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2022.3194169",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11042-019-7413-y",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11042-020-10385-8",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3096741",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3136307",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2020.3047791",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2023.3241319",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW59228.2023.00404",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS47612.2022.9982016",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2010.5537153",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2010.2085952",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JPROC.2014.2346153",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2011.2118490",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSII.2018.2824899",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2013.2273537",
            "source": "crossref"
        },
        {
            "doi": "10.1126/scirobotics.aaz9712",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8593805",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2022.3156653",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS40897.2019.8968520",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2022.3153904",
            "source": "crossref"
        },
        {
            "doi": "10.1145/1143844.1143874",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIM.2023.3301911",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2963386",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00407",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3068942",
            "source": "crossref"
        },
        {
            "title": "Frequency cam: Imaging periodic signals in real-time",
            "source": "crossref"
        },
        {
            "title": "Derivation of the euler-rodrigues formula for three-dimensional rotations from the general formula for four-dimensional rotations",
            "source": "crossref"
        },
        {
            "title": "A density-based algorithm for discovering clusters in large spatial databases with noise",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Dataset contains 30 sequences
-
