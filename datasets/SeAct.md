---
{
    "name": "SeAct",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "subcategory": [
        "Human Action Recognition"
    ],
    "task": "Human Activity Recognition",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "aedat"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/file/d/1AO8KGzFT6784kiW2OzAgi0a-jqmzl-x6/view",
                "format": "aedat",
                "available": true
            }
        ],
        "size_gb": 8.2,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "ExACT: Language-Guided Conceptual Reasoning and Uncertainty Estimation for Event-Based Action Recognition and More",
        "doi": "10.1109/CVPR52733.2024.01763",
        "authors": [
            "Jiazhou Zhou",
            "Xu Zheng",
            "Yuanhuiyi Lyu",
            "Lin Wang"
        ],
        "abstract": "Event cameras have recently been shown beneficial for practical vision tasks such as action recognition thanks to their high temporal resolution power efficiency and reduced privacy concerns. However current research is hindered by 1) the difficulty in processing events because of their prolonged duration and dynamic actions with complex and ambiguous semantics and 2) the redundant action depiction of the event frame representation with fixed stacks. We find language naturally conveys abundant semantic information rendering it stunningly superior in reducing semantic uncertainty. In light of this we propose ExACT a novel approach that for the first time tackles event-based action recognition from a cross-modal conceptualizing perspective. Our ExACT brings two technical contributions. Firstly we propose an adaptive fine-grained event (AFE) representation to adaptively filter out the repeated events for the stationary objects while preserving dynamic ones. This subtly enhances the performance of ExACT without extra computational cost. Then we propose a conceptual reasoning-based uncertainty estimation module which simulates the recognition process to enrich the semantic representation. In particular conceptual reasoning builds the temporal relation based on the action semantics and uncertainty estimation tackles the semantic uncertainty of actions based on the distributional representation. Experiments show that our ExACT achieves superior recognition accuracy of 94.83%(+2.23%) 90.10%(+37.47%) and 67.24% on PAF HARDVS and our SeAct datasets respectively.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 6,
            "updated": "2025-06-12T14:05:28.423947"
        },
        {
            "source": "scholar",
            "count": 31,
            "updated": "2025-06-12T14:05:28.297874"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2403.12534"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10657445"
        },
        {
            "type": "github_page",
            "url": "https://github.com/jiazhou-garland/ExACT/tree/master"
        }
    ],
    "full_name": "Semantic Abundant Event-based Action Recognition (SeAct)",
    "additional_metadata": {
        "num_classes": "58",
        "num_categories": "4",
        "stereo": false
    },
    "bibtex": {
        "pages": "18633--18643",
        "year": 2024,
        "month": "jun",
        "author": "Zhou, Jiazhou and Zheng, Xu and Lyu, Yuanhuiyi and Wang, Lin",
        "publisher": "IEEE",
        "booktitle": "2024 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} ({CVPR})",
        "urldate": "2024-12-15",
        "language": "en",
        "doi": "10.1109/CVPR52733.2024.01763",
        "url": "https://ieeexplore.ieee.org/document/10657445/",
        "shorttitle": "{ExACT}",
        "isbn": "9798350353006",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "{ExACT}: {Language}-{Guided} {Conceptual} {Reasoning} and {Uncertainty} {Estimation} for {Event}-{Based} {Action} {Recognition} and {More}",
        "address": "Seattle, WA, USA",
        "type": "inproceedings",
        "key": "zhou_exact_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPR.2017.781",
            "source": "crossref"
        },
        {
            "doi": "10.18653/v1/P17-1151",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11042-020-09004-3",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2020.3023597",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00575",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11633-022-1369-5",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.01819",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS55552.2023.10341740",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00124",
            "source": "crossref"
        },
        {
            "doi": "10.24963/ijcai.2022/762",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00028",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00630",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2023.3300741",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2015.169",
            "source": "crossref"
        },
        {
            "doi": "10.24963/ijcai.2019/189",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.90",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICPR48806.2021.9412991",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.02228",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2020.00424",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-022-01594-9",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s10462-019-09724-5",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00718",
            "source": "crossref"
        },
        {
            "doi": "10.24963/ijcai.2021/240",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00320",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01049",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2020.00275",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3583741",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnbot.2019.00038",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s10462-020-09904-8",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01931",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW56347.2022.00301",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2022.3183112",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2015.510",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00675",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01301",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.00169",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2019.2945630",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2022.3140819",
            "source": "crossref"
        },
        {
            "doi": "10.1109/tcsvt.2024.3448615",
            "source": "crossref"
        },
        {
            "title": "Improving local iden-tifiability in probabilistic box embeddings",
            "source": "crossref"
        },
        {
            "title": "Synap-tic plasticity dynamics for deep continuous local learning (decolle)",
            "source": "crossref"
        },
        {
            "title": "Tam: Temporal adaptive module for video recog-nition",
            "source": "crossref"
        },
        {
            "title": "Learning transferable visual models from natural language supervision",
            "source": "crossref"
        },
        {
            "title": "Chatgpt: A comprehensive review on background, applications, key challenges, bias, ethics, lim-itations and future scope",
            "source": "crossref"
        },
        {
            "title": "Slayer: Spike layer error reassignment in time",
            "source": "crossref"
        },
        {
            "title": "Self-supervised 3d skeleton action representation learning with motion con-sistency and continuity",
            "source": "crossref"
        },
        {
            "title": "View-invariant probabilistic embedding for human pose",
            "source": "crossref"
        },
        {
            "title": "Attention is all you need",
            "source": "crossref"
        },
        {
            "title": "Motion deblur-ring with real events",
            "source": "crossref"
        }
    ]
}
---


### Dataset Structure 
- Contains 58 actions under 4 conditions