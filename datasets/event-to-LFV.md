---
{
    "name": "event-to-LFV",
    "aliases": [],
    "year": 2023,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "CARLA"
    ],
    "other_sensors": [],
    "category": "Domain Specific Application",
    "tags": [
        "Light Field Reconstruction"
    ],
    "description": "Light field reconstruction",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "",
        "dataset_links": []
    },
    "paper": {
        "title": "EV-LFV: Synthesizing Light Field Event Streams from an Event Camera and Multiple RGB Cameras",
        "doi": "10.1109/TVCG.2023.3320271",
        "authors": [
            "Zhicheng Lu",
            "Xiaoming Chen",
            "Vera Yuk Ying Chung",
            "Weidong Cai",
            "Yiran Shen"
        ],
        "abstract": "Light field videos captured in RGB frames (RGB-LFV) can provide users with a 6 degree-of-freedom immersive video experience by capturing dense multi-subview video. Despite its potential benefits, the processing of dense multi-subview video is extremely resource-intensive, which currently limits the frame rate of RGB-LFV (i.e., lower than 30 fps) and results in blurred frames when capturing fast motion. To address this issue, we propose leveraging event cameras, which provide high temporal resolution for capturing fast motion. However, the cost of current event camera models makes it prohibitive to use multiple event cameras for RGB-LFV platforms. Therefore, we propose EV-LFV, an event synthesis framework that generates full multi-subview event-based RGB-LFV with only one event camera and multiple traditional RGB cameras. EV-LFV utilizes spatial-angular convolution, ConvLSTM, and Transformer to model RGB-LFV's angular features, temporal features, and long-range dependency, respectively, to effectively synthesize event streams for RGB-LFV. To train EV-LFV, we construct the first event-to-LFV dataset consisting of 200 RGB-LFV sequences with ground-truth event streams. Experimental results demonstrate that EV-LFV outperforms state-of-the-art event synthesis methods for generating event-based RGB-LFV, effectively alleviating motion blur in the reconstructed RGB-LFV.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 3,
            "updated": "2025-06-15T11:14:31.041007"
        },
        {
            "source": "scholar",
            "count": 5,
            "updated": "2025-06-15T11:14:30.880299"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10269643"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "200",
        "stereo": false
    },
    "bibtex": {
        "pages": "4546--4555",
        "year": 2023,
        "month": "nov",
        "author": "Lu, Zhicheng and Chen, Xiaoming and Chung, Vera Yuk Ying and Cai, Weidong and Shen, Yiran",
        "journal": "IEEE Transactions on Visualization and Computer Graphics",
        "urldate": "2024-12-15",
        "number": "11",
        "language": "en",
        "doi": "10.1109/TVCG.2023.3320271",
        "url": "https://ieeexplore.ieee.org/document/10269643/",
        "shorttitle": "{EV}-{LFV}",
        "issn": "1077-2626, 1941-0506, 2160-9306",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "volume": "29",
        "title": "{EV}-{LFV}: {Synthesizing} {Light} {Field} {Event} {Streams} from an {Event} {Camera} and {Multiple} {RGB} {Cameras}",
        "type": "article",
        "key": "lu_ev-lfv_2023"
    },
    "referenced_papers": [
        {
            "doi": "10.1145/3474085.3475229",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01032",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3060707",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00938",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01216-8_21",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV50981.2020.00063",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3072959.3073614",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19830-4_20",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00364",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01589",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01723",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01231-1_9",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2980179.2980251",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00256",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MMUL.2021.3069912",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3306346.3322980",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2022.3145053",
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
            "doi": "10.1109/VRW50115.2020.00153",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCP51581.2021.9466265",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00068",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11042-018-6597-x",
            "source": "crossref"
        },
        {
            "doi": "10.1109/VRW55335.2022.00259",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2010.2085952",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.2987316",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-017-1050-6",
            "source": "crossref"
        },
        {
            "doi": "10.1007/3-540-44938-8_13",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3386569.3392485",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00041",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2013.03.006",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MMUL.2017.24",
            "source": "crossref"
        },
        {
            "title": "Attention is all you need",
            "source": "crossref"
        },
        {
            "title": "Esim: an open event camera simulator",
            "source": "crossref"
        },
        {
            "title": "Longformer: The long-document transformer",
            "source": "crossref"
        },
        {
            "title": "Event based, near eye gaze tracking beyond 10,000 hz",
            "source": "crossref"
        },
        {
            "title": "Compressed animated light fields with real-time view-dependent reconstruction",
            "source": "crossref"
        },
        {
            "title": "Event transformer",
            "source": "crossref"
        },
        {
            "title": "Carla: An open urban driving simulator",
            "source": "crossref"
        },
        {
            "title": "An image is worth 16&#x00D7;16 words: Transformers for image recognition at scale",
            "source": "crossref"
        },
        {
            "title": "End-to-end object detection with transformers",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Contains 200 scenes
