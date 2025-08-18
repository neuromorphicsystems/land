---
{
    "name": "EZSR",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "V2E"
    ],
    "other_sensors": [],
    "category": "Object Detection, Classification, and Tracking",
    "subcategory": [
        "Object Classification",
        "Object Detection"
    ],
    "task": "Zero-shot object recognition",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "Dataset link in Github repository is not yet active.",
        "dataset_links": []
    },
    "paper": {
        "title": "EZSR: Event-based Zero-Shot Recognition",
        "doi": "10.48550/arXiv.2407.21616",
        "authors": [
            "Yan Yang",
            "Liyuan Pan",
            "Dongxu Li",
            "Liu Liu"
        ],
        "abstract": "This paper studies zero-shot object recognition using event camera data. Guided by CLIP, which is pre-trained on RGB images, existing approaches achieve zero-shot object recognition by optimizing embedding similarities between event data and RGB images respectively encoded by an event encoder and the CLIP image encoder. Alternatively, several methods learn RGB frame reconstructions from event data for the CLIP image encoder. However, they often result in suboptimal zero-shot performance.   This study develops an event encoder without relying on additional reconstruction networks. We theoretically analyze the performance bottlenecks of previous approaches: the embedding optimization objectives are prone to suffer from the spatial sparsity of event data, causing semantic misalignments between the learned event embedding space and the CLIP text embedding space. To mitigate the issue, we explore a scalar-wise modulation strategy. Furthermore, to scale up the number of events and RGB data pairs for training, we also study a pipeline for synthesizing event data from static RGB images in mass.   Experimentally, we demonstrate an attractive scaling property in the number of parameters and synthesized data. We achieve superior zero-shot object recognition performance on extensive standard benchmark datasets, even compared with past supervised learning approaches. For example, our model with a ViT/B-16 backbone achieves 47.84% zero-shot accuracy on the N-ImageNet dataset.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "scholar",
            "count": 1,
            "updated": "2025-06-25T15:22:38.348398"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2407.21616"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2407.21616v2"
        },
        {
            "type": "project_page",
            "url": "https://yan98.github.io/EZSR/"
        },
        {
            "type": "github_page",
            "url": "https://github.com/Yan98/Event-based-Zero-Shot-Recognition"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "keywords": "Computer Science - Computer Vision and Pattern Recognition",
        "note": "arXiv:2407.21616 [cs]",
        "year": 2024,
        "month": "nov",
        "author": "Yang, Yan and Pan, Liyuan and Li, Dongxu and Liu, Liu",
        "publisher": "arXiv",
        "urldate": "2024-12-14",
        "language": "en",
        "doi": "10.48550/arXiv.2407.21616",
        "url": "http://arxiv.org/abs/2407.21616",
        "shorttitle": "{EZSR}",
        "title": "{EZSR}: {Event}-based {Zero}-{Shot} {Recognition}",
        "type": "misc",
        "key": "yang_ezsr_2024"
    }
}
---


### Dataset Structure