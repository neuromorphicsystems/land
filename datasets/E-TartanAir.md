---
{
    "name": "E-TartanAir",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "V2E"
    ],
    "other_sensors": [],
    "category": "Benchmarking, SNN Training Task, and SNN Training",
    "subcategory": [
        "Object Classification"
    ],
    "task": "Pre-training event-based dataset",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Conversion Instructions"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "Steps to create the dataset are provided in the Github page",
        "dataset_links": []
    },
    "paper": {
        "title": "Event Camera Data Pre-training",
        "doi": "10.1109/ICCV51070.2023.00982",
        "authors": [
            "Yan Yang",
            "Liyuan Pan",
            "Liu Liu"
        ],
        "abstract": "This paper proposes a pre-trained neural network for handling event camera data. Our model is a self-supervised learning framework, and uses paired event camera data and natural RGB images for training. Our method contains three modules connected in a sequence: i) a family of event data augmentations, generating meaningful event images for self-supervised training; ii) a conditional masking strategy to sample informative event patches from event images, encouraging our model to capture the spatial layout of a scene and accelerating training; iii) a contrastive learning approach, enforcing the similarity of embeddings between matching event images, and between paired event and RGB images. An embedding projection loss is proposed to avoid the model collapse when enforcing the event image embedding similarities. A probability distribution alignment loss is proposed to encourage the event image to be consistent with its paired RGB image in the feature space. Transfer learning performance on downstream tasks shows the superiority of our method over state-of-the-art methods. For example, we achieve top-1 accuracy at 64.83% on the N-ImageNet dataset. Our code is available at https://github.com/Yan98/Event-Camera-Data-Pre-training.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 18,
            "updated": "2025-06-13T11:35:16.632663"
        },
        {
            "source": "scholar",
            "count": 43,
            "updated": "2025-06-13T11:35:16.212333"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2311.11533"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10378059"
        },
        {
            "type": "project_page",
            "url": "https://yan98.github.io/ECDDP/"
        },
        {
            "type": "github_page",
            "url": "https://github.com/Yan98/Event-Camera-Data-Dense-Pre-training/"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "source_dataset": "TartanAir",
        "resolution": "480 x 640",
        "stereo": false
    },
    "bibtex": {
        "pages": "10665--10675",
        "year": 2023,
        "month": "oct",
        "author": "Yang, Yan and Pan, Liyuan and Liu, Liu",
        "publisher": "IEEE",
        "booktitle": "2023 {IEEE}/{CVF} {International} {Conference} on {Computer} {Vision} ({ICCV})",
        "urldate": "2024-12-11",
        "language": "en",
        "doi": "10.1109/ICCV51070.2023.00982",
        "url": "https://ieeexplore.ieee.org/document/10378059/",
        "isbn": "9798350307184",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "Event {Camera} {Data} {Pre}-training",
        "address": "Paris, France",
        "type": "inproceedings",
        "key": "yang_event_2023"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPRW.2019.00205",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00951",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01549",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00950",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2009.5206848",
            "source": "crossref"
        },
        {
            "doi": "10.18653/v1/n19\u20131423",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01268",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00573",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3068942",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01553",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00975",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00215",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00568",
            "source": "crossref"
        },
        {
            "doi": "10.5194/isprsannals-II-3-W5-427-2015",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2022.3145053",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58598-3_25",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCVW54120.2021.00103",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00437",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-20873-8_20",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV45572.2020.9093366",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00186",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19830-4_20",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2022.3220938",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01032",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2014.6906882",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00393",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2800793",
            "source": "crossref"
        },
        {
            "title": "Beit: BERT pre-training of image transformers",
            "source": "crossref"
        },
        {
            "title": "DDD17: end-to-end DAVIS driving dataset",
            "source": "crossref"
        },
        {
            "title": "Unsupervised learning of visual features by contrasting cluster assignments",
            "source": "crossref"
        },
        {
            "title": "Generative pretraining from pixels",
            "source": "crossref"
        },
        {
            "title": "A simple framework for contrastive learning of visual representations",
            "source": "crossref"
        },
        {
            "title": "Improved baselines with momentum contrastive learning",
            "source": "crossref"
        },
        {
            "title": "Structure-aware network for lane marker extraction with dynamic vision sensor",
            "source": "crossref"
        },
        {
            "title": "An image is worth 16x16 words: Transformers for image recognition at scale",
            "source": "crossref"
        },
        {
            "title": "Bootstrap your own latent - A new approach to self-supervised learning",
            "source": "crossref"
        },
        {
            "title": "Deep residual learning for image recognition",
            "source": "crossref"
        },
        {
            "title": "Pytorch: An imperative style, high-performance deep learning library",
            "source": "crossref"
        },
        {
            "title": "Learning to detect objects with a 1 megapixel event camera",
            "source": "crossref"
        },
        {
            "title": "Language models are unsupervised multitask learners",
            "source": "crossref"
        },
        {
            "title": "Discrete variational autoencoders",
            "source": "crossref"
        },
        {
            "title": "Representation learning with contrastive predictive coding",
            "source": "crossref"
        },
        {
            "title": "Image BERT pretraining with online tokenizer",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Converted from TartanAir
- Sequences have a resolution of 480 x 640
- Steps to create the event-based dataset are provided at [Event-Camera-Data-Dense-Pre-training/generate_data at main · Yan98/Event-Camera-Data-Dense-Pre-training (github.com)](https://github.com/Yan98/Event-Camera-Data-Dense-Pre-training/tree/main/generate_data)
