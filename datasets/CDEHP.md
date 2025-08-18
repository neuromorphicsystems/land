---
{
    "name": "CDEHP",
    "aliases": [],
    "year": 2023,
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
        "Human Action Recognition"
    ],
    "task": "Human pose estimation",
    "dataset_properties": {
        "available_online": false,
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
        "availability_comment": "Data will be made available on request. Sample data is available online",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/drive/folders/1rfaQ4h2xJx8wlbnXTl5-VCzE5iQpCtN9",
                "format": "Unknown",
                "available": false
            }
        ],
        "size_gb": 2.8,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "A temporal densely connected recurrent network for event-based human pose estimation",
        "doi": "10.1016/j.patcog.2023.110048",
        "authors": [
            "Zhanpeng Shao",
            "Xueping Wang",
            "Wen Zhou",
            "Wuzhen Wang",
            "Jianyu Yang",
            "Youfu Li"
        ],
        "abstract": "Event camera is an emerging bio-inspired vision sensors that report per-pixel brightness changes asynchronously. It holds noticeable advantage of high dynamic range, high speed response, and low power budget that enable it to best capture local motions in uncontrolled environments. This motivates us to unlock the potential of event cameras for human pose estimation, as the human pose estimation with event cameras is rarely explored. Due to the novel paradigm shift from conventional frame-based cameras, however, event signals in a time interval contain very limited information, as event cameras can only capture the moving body parts and ignores those static body parts, resulting in some parts to be incomplete or even disappeared in the time interval. This paper proposes a novel densely connected recurrent architecture to address the problem of incomplete information. By this recurrent architecture, we can explicitly model not only the sequential but also non-sequential geometric consistency across time steps to accumulate information from previous frames to recover the entire human bodies, achieving a stable and accurate human pose estimation from event data. Moreover, to better evaluate our model, we collect a large-scale multimodal event-based dataset that comes with human pose annotations, which is by far the most challenging one to the best of our knowledge. The experimental results on two public datasets and our own dataset demonstrate the effectiveness and strength of our approach. Code is available online for facilitating the future research.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 6,
            "updated": "2025-06-15T09:24:24.364143"
        },
        {
            "source": "scholar",
            "count": 10,
            "updated": "2025-06-15T09:24:24.219124"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2209.07034v1"
        },
        {
            "type": "paper",
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S0031320323007458"
        },
        {
            "type": "github_page",
            "url": "https://github.com/xavier-zw/tDenseRNN_pose"
        }
    ],
    "full_name": " Color (RGB), Depth, and Event Cameras Human Pose (CDEHP) Dataset",
    "additional_metadata": {
        "num_subjects": "20",
        "num_male": "15",
        "num_female": "5"
    },
    "bibtex": {
        "pages": "110048",
        "year": 2024,
        "month": "mar",
        "author": "Shao, Zhanpeng and Wang, Xueping and Zhou, Wen and Wang, Wuzhen and Yang, Jianyu and Li, Youfu",
        "journal": "Pattern Recognition",
        "urldate": "2024-12-15",
        "language": "en",
        "doi": "10.1016/j.patcog.2023.110048",
        "url": "https://linkinghub.elsevier.com/retrieve/pii/S0031320323007458",
        "issn": "00313203",
        "volume": "147",
        "title": "A temporal densely connected recurrent network for event-based human pose estimation",
        "type": "article",
        "key": "shao_temporal_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/TII.2018.2884211",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01231-1_29",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00543",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2929257",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.patcog.2023.109429",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00217",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2018.2841516",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00652",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2018.XIV.062",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2021.3077136",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00568",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.590",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00546",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01081",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00704",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.patcog.2020.107258",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00706",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2012.261",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2015.2487860",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.patcog.2023.109497",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.patcog.2020.107410",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00044",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01073",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00059",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2015.2392947",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00502",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-10602-1_48",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2014.471",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.495",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.243",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00584",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.90",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00847",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.511",
            "source": "crossref"
        },
        {
            "title": "Multimodal face-pose estimation with multitask manifold deep learning",
            "source": "crossref"
        },
        {
            "title": "Stacked capsule graph autoencoders for geometry-aware 3D head pose estimation",
            "source": "crossref"
        },
        {
            "title": "OpenPose: Realtime multi-person 2D pose estimation using part affinity fields",
            "source": "crossref"
        },
        {
            "title": "Aggregated pyramid gating network for human pose estimation without pre-training",
            "source": "crossref"
        },
        {
            "title": "Event-based vision: A survey",
            "source": "crossref"
        },
        {
            "title": "A 128 \u00d7 128 120 db 15 \u03bcs latency asynchronous temporal contrast vision sensor",
            "source": "crossref"
        },
        {
            "title": "Event-guided structured output tracking of fast-moving objects using a CeleX sensor",
            "source": "crossref"
        },
        {
            "title": "The event-camera dataset and simulator: Event-based data for pose estimation, visual odometry, and SLAM",
            "source": "crossref"
        },
        {
            "title": "Learning from images: A distillation learning framework for event cameras",
            "source": "crossref"
        },
        {
            "title": "Stacked hourglass networks for human pose estimation",
            "source": "crossref"
        },
        {
            "title": "Exploring temporal consistency for human pose estimation in videos",
            "source": "crossref"
        },
        {
            "title": "Pictorial structures revisited: People detection and articulated pose estimation",
            "source": "crossref"
        },
        {
            "title": "Articulated human detection with flexible mixtures of parts",
            "source": "crossref"
        },
        {
            "title": "Multimodal deep autoencoder for human pose recovery",
            "source": "crossref"
        },
        {
            "title": "Weakly-supervised pre-training for 3D human pose estimation via perspective knowledge",
            "source": "crossref"
        },
        {
            "title": "Structure-aware human pose estimation with graph convolutional networks",
            "source": "crossref"
        },
        {
            "title": "HFirst: A temporal approach to object recognition",
            "source": "crossref"
        }
    ]
}
---


### Dataset Structure 

- Contains 20 subjects (15 and 5  female)