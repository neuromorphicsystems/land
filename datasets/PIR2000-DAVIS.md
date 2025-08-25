---
{
    "name": "PIR2000-DAVIS",
    "aliases": [],
    "year": 2022,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [
        "Photron IDPExpress R2000"
    ],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "tags": [
        "De-blurring"
    ],
    "description": "Frame/Event fusion (Motion Deblurring)",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "Unknown"
        ],
        "availability_comment": "Github repository states that code and dataset will be made available shortly.",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/file/d/1PWDh0rSfard1I4Ze8XUtSKdXDrOoziX5",
                "format": "Unknown",
                "available": true
            }
        ],
        "size_gb": 12.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Event-guided Video Clip Generation from Blurry Images",
        "doi": "10.1145/3503161.3548142",
        "authors": [
            "Xin Ding",
            "Tsuyoshi Takatani",
            "Zhongyuan Wang",
            "Ying Fu",
            "Yinqiang Zheng"
        ],
        "abstract": "Dynamic and active pixel vision sensors (DAVIS) can simultaneously produce streams of asynchronous events captured by the dynamic vision sensor (DVS) and intensity frames from the active pixel sensor (APS). Event sequences show high temporal resolution and high dynamic range, while intensity images easily suffer from motion blur due to the low frame rate of APS. In this paper, we present an end-to-end convolutional neural network based method under the local and global constraints of events to restore clear, sharp intensity frames through collaborative learning from a blurry image and its associated event streams. Specifically, we first learn a function of the relationship between the sharp intensity frame and the corresponding blurry image with its event data. Then we propose a generation module to realize it with a supervision module to constrain the restoration in the motion process. We also capture the first realistic dataset with paired blurry frame/events and sharp frames by synchronizing a DAVIS camera and a high-speed camera. Experimental results show that our method can reconstruct high-quality sharp video clips, and outperform the state-of-the-art on both simulated and real-world data.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 1,
            "updated": "2025-06-13T13:45:30.679584"
        },
        {
            "source": "scholar",
            "count": 3,
            "updated": "2025-06-13T13:45:30.472998"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://dl.acm.org/doi/abs/10.1145/3503161.3548142"
        },
        {
            "type": "github_page",
            "url": "https://github.com/XDing07/Event_VCG"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "19",
        "stereo": false
    },
    "bibtex": {
        "pages": "2672--2680",
        "year": 2022,
        "month": "oct",
        "author": "Ding, Xin and Takatani, Tsuyoshi and Wang, Zhongyuan and Fu, Ying and Zheng, Yinqiang",
        "publisher": "ACM",
        "booktitle": "Proceedings of the 30th {ACM} {International} {Conference} on {Multimedia}",
        "urldate": "2024-12-02",
        "language": "en",
        "doi": "10.1145/3503161.3548142",
        "url": "https://dl.acm.org/doi/10.1145/3503161.3548142",
        "isbn": "978-1-4503-9203-7",
        "title": "Event-guided {Video} {Clip} {Generation} from {Blurry} {Images}",
        "address": "Lisboa Portugal",
        "type": "inproceedings",
        "key": "ding_event-guided_2022"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPR.2016.102",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2021.3052070",
            "source": "crossref"
        },
        {
            "doi": "10.1145/1618452.1618491",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01258-8_46",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00508",
            "source": "crossref"
        },
        {
            "doi": "10.1162/neco.1997.9.8.1735",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00663",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00897",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.56",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00698",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00345",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2012.6238892",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00398",
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
            "doi": "10.1007/978-3-030-58583-9_32",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01032",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "title": "Low Cost and Latency Event Camera Background Activity Denoising",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

### Dataset Structure

- Contains 19 scenes

The resolutions of the event camera and high-speed camera are different. Then you'd better crop the clear images from the high-speed camera for their correspondence. The cropped boxes can be set as [26, 21, 282, 245].
