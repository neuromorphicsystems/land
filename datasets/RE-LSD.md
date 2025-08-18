---
{
    "name": "RE-LSD",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Depth, Stereo, and 3D Reconstruction",
    "subcategory": [
        "Line segmentation"
    ],
    "task": "Line Segmentation",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
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
        "dataset_links": [],
        "size_gb": 10.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "EvLSD-IED: Event-Based Line Segment Detection with Image-to-Event Distillation",
        "doi": "10.1109/TIM.2024.3460882",
        "authors": [
            "Xinya Wang",
            "Haitian Zhang",
            "Huai Yu",
            "Xianrong Wan"
        ],
        "abstract": "Event cameras, also known as neuromorphic cameras, have garnered significant interest in recent years because of their high temporal resolution for capturing dynamic scenes. Their unique asynchronous triggering mechanism based on illumination changes offers a unique advantage in capturing edge information, particularly in line segment detection tasks. However, directly applying state-of-the-art image-based line segment detection methods to events poses a nontrivial challenge due to the lack of essential semantic information (such as color and texture), the inherent scarcity of information in areas with low light variation, as well as the absence of well-annotated datasets. To address these issues, we introduce EvLSD-IED, a learning-based method for event-based line segment detection, along with an image-to-event distillation (IED) framework for feature-boosting, to compensate for the limitations due to the characteristics above of event cameras. Specifically, we propose a scene-level distillation method to help the event-based modal build a high-level understanding of the scene. In addition, to improve the model\u2019s sensitivity on low-contrast edges, we propose a line-level distillation method, enabling the model to generate comprehensive features even with incomplete input information. In addition, we build two datasets, i.e., a synthetic dataset named E-wireframe and the first real-world dataset called RE-LSD, serving for training and evaluation. Experimental evaluations on the two collected datasets validate the effectiveness of EvLSD-IED, showcasing its ability to achieve accurate and robust line segment detection even under extreme conditions. With pretraining on the E-wireframe and fine-tuning on RE-LSD, the model achieves a mean structural average precision (msAP) of 47.8%, significantly surpassing the performance of the state-of-the-art. Our code, pre-trained models, and datasets are available at https://github.com/Qiuben/EvLSD-IED.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 0,
            "updated": "2025-06-14T00:31:12.387219"
        },
        {
            "source": "scholar",
            "count": 1,
            "updated": "2025-06-14T00:31:12.261583"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10680635/"
        },
        {
            "type": "github_page",
            "url": "https://github.com/Qiuben/EvLSD-IED"
        }
    ],
    "full_name": "",
    "connected_datasets": [
        "E-Wireframe"
    ],
    "bibtex": {
        "pages": "1--12",
        "keywords": "Cameras, Event camera, Feature extraction, Image edge detection, Image segmentation, knowledge distillation, line segment detection, Motion segmentation, Streams, Transforms",
        "year": 2024,
        "author": "Wang, Xinya and Zhang, Haitian and Yu, Huai and Wan, Xianrong",
        "journal": "IEEE Transactions on Instrumentation and Measurement",
        "doi": "10.1109/TIM.2024.3460882",
        "volume": "73",
        "title": "{EvLSD}-{IED}: {Event}-{Based} {Line} {Segment} {Detection} {With} {Image}-to-{Event} {Distillation}",
        "type": "article",
        "key": "wang_evlsd-ied_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/TPAMI.2018.2849973",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIM.2022.3198724",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2021.3106820",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIM.2020.2999137",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-540-88688-4_15",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.cviu.2016.03.017",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIM.2023.3259047",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIM.2023.3328094",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neucom.2022.07.026",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2023.3334877",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00286",
            "source": "crossref"
        },
        {
            "doi": "10.1109/EBCCSP.2016.7605244",
            "source": "crossref"
        },
        {
            "doi": "10.5201/ipol.2012.gjmr-lsd",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fncom.2018.00103",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3061404",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnbot.2018.00004",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICPR56361.2022.9956502",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2018.2807983",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00072",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.engappai.2023.107410",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00938",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2021.3077136",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00067",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46484-8_29",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00573",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01112",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01444",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01264-9_45",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00667",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00105",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2023.3312749",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00829",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01634",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01222",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2963386",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00568",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00602",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00584",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.patcog.2020.107404",
            "source": "crossref"
        },
        {
            "doi": "10.1126/scirobotics.adj8124",
            "source": "crossref"
        },
        {
            "title": "Distilling the knowledge in a neural network",
            "source": "crossref"
        },
        {
            "title": "FitNets: Hints for thin deep nets",
            "source": "crossref"
        },
        {
            "title": "The modality focusing hypothesis: Towards understanding crossmodal knowledge distillation",
            "source": "crossref"
        },
        {
            "title": "Object-centric cross-modal feature distillation for event-based object detection",
            "source": "crossref"
        },
        {
            "title": "MonoDistill: Learning spatial features for monocular 3D object detection",
            "source": "crossref"
        },
        {
            "title": "ESIM: An open event camera simulator",
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