---
{
    "name": "EventHPE",
    "aliases": [],
    "year": 2021,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "CeleX-V"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "subcategory": [
        "Human Pose Recognition",
        "Optical Flow"
    ],
    "task": "Human pose and shape recognition",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "OneDrive"
        ],
        "file_formats": [
            "Other"
        ],
        "availability_comment": "Processed events are available online. Full event stream can be provided on request",
        "dataset_links": [
            {
                "name": "OneDrive",
                "url": "https://ualbertaca-my.sharepoint.com/personal/szou2_ualberta_ca/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fszou2%5Fualberta%5Fca%2FDocuments%2Fpreprocessed%5Fdata%5Fevent%2Etar%2Egz&parent=%2Fpersonal%2Fszou2%5Fualberta%5Fca%2FDocuments&ga=1",
                "format": "Other",
                "available": true
            }
        ],
        "size_gb": 24.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "EventHPE: Event-based 3D Human Pose and Shape Estimation",
        "doi": "10.1109/ICCV48922.2021.01081",
        "authors": [
            "Shihao Zou",
            "Chuan Guo",
            "Xinxin Zuo",
            "Sen Wang",
            "Pengyu Wang",
            "Xiaoqin Hu",
            "Shoushun Chen",
            "Minglun Gong",
            "Li Cheng"
        ],
        "abstract": "Event camera is an emerging imaging sensor for capturing dynamics of moving objects as events, which motivates our work in estimating 3D human pose and shape from the event signals. Events, on the other hand, have their unique challenges: rather than capturing static body postures, the event signals are best at capturing local motions. This leads us to propose a two-stage deep learning approach, called EventHPE. The first-stage, FlowNet, is trained by unsupervised learning to infer optical flow from events. Both events and optical flow are closely related to human body dynamics, which are fed as input to the ShapeNet in the second stage, to estimate 3D human shapes. To mitigate the discrepancy between image-based flow (optical flow) and shape-based flow (vertices movement of human body shape), a novel flow coherence loss is introduced by exploiting the fact that both flows are originated from the identical human motion. An in-house event-based 3D human dataset is curated that comes with 3D pose and shape annotations, which is by far the largest one to our knowledge. Empirical evaluations on DHP19 dataset and our in-house dataset demonstrate the effectiveness of our approach.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 34,
            "updated": "2025-06-15T09:06:40.271515"
        },
        {
            "source": "scholar",
            "count": 63,
            "updated": "2025-06-15T09:06:40.132307"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2108.06819"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9710646"
        },
        {
            "type": "github_page",
            "url": "https://github.com/JimmyZou/EventHPE"
        }
    ],
    "full_name": "Event Human Pose Estimation (EventHPE)",
    "additional_metadata": {
        "num_subjects": "15",
        "num_male": "11",
        "num_female": "4",
        "num_classes": "21",
        "stereo": false
    },
    "bibtex": {
        "pages": "10976--10985",
        "keywords": "Three-dimensional displays, Computer vision, Datasets and evaluation, Deep learning, Dynamics, Gestures and body pose, Image motion analysis, Optical losses, Shape",
        "year": 2021,
        "author": "Zou, Shihao and Guo, Chuan and Zuo, Xinxin and Wang, Sen and Wang, Pengyu and Hu, Xiaoqin and Chen, Shoushun and Gong, Minglun and Cheng, Li",
        "booktitle": "2021 {IEEE}/{CVF} {International} {Conference} on {Computer} {Vision} ({ICCV})",
        "doi": "10.1109/ICCV48922.2021.01081",
        "title": "{EventHPE}: {Event}-based {3D} {Human} {Pose} and {Shape} {Estimation}",
        "type": "inproceedings",
        "key": "zou_eventhpe_2021"
    },
    "referenced_papers": [
        {
            "doi": "10.15607/RSS.2018.XIV.062",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00589",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.537",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2017.2772922",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TMM.2020.3001506",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2021.3102128",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.90",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00338",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00744",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00576",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00530",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2015.326",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2816795.2818013",
            "source": "crossref"
        },
        {
            "doi": "10.1006/cviu.2000.0897",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-49409-8_15",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00502",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2929257",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2892452",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00217",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00214",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00785",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.610",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2017.2769655",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00573",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.781",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00055",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01123",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-017-1050-6",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2014.303",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.cviu.2016.09.002",
            "source": "crossref"
        },
        {
            "title": "Unsupervised 3d human mesh recovery from noisy point clouds",
            "source": "crossref"
        },
        {
            "title": "Asynchronous, photometric feature tracking using events and frames",
            "source": "crossref"
        },
        {
            "title": "Event-based vision: A survey",
            "source": "crossref"
        },
        {
            "title": "A progressive batching l-bfgs method for machine learning",
            "source": "crossref"
        },
        {
            "title": "Pytorch: an imperative style, high-performance deep learning library",
            "source": "crossref"
        },
        {
            "title": "Accelerating 3d deep learning with pytorch3d",
            "source": "crossref"
        },
        {
            "title": "3d human pose estimation: A review of the literature and analysis of covariates",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Contains data from 15 subjects ( 11 male and 4)
- Contains 21 different actions

Downloadable data contains
\- preprocessed data
\- events_256 (event frames converted from raw events data, resolution 256x256)
\- full_pic_256 (gray-scale images)
\- pose_events (annotated poses of gray-scale images)
\- hmr_results (inferred poses of gray-scale images using [HMR](https://github.com/akanazawa/hmr))
\- vibe_results_0802 (inferred poses of gray-scale images using [VIBE](https://github.com/mkocabas/VIBE))
\- pred_flow_events_256 (inferred optical flow from event frames)
\- model (train/test on a snippet of 8 frames)

Dataset is also provided through a Google Drive link, although that is currently unavailable.
https://drive.google.com/drive/folders/11gMj-5sgSiBciWNR0V6r9PMpru84zMk5?usp=sharing
