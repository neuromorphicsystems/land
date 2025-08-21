---
{
    "name": "FELT",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Object Detection, Classification, and Tracking",
    "tags": [
        "Object Tracking"
    ],
    "description": "Object Tracking",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Baidu",
            "Dropbox"
        ],
        "file_formats": [
            "aedat"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Baidu",
                "url": "https://pan.baidu.com/s/12ur7n1wSDvIWajPQJMd8Kg?pwd=AHUT",
                "format": "aedat",
                "available": true
            },
            {
                "name": "Dropbox",
                "url": "https://www.dropbox.com/scl/fo/0n5m12gt30drsha30hgth/h?rlkey=20mpz2oh1etbv8cnsav01bhj5&dl=0",
                "format": "aedat",
                "available": true
            }
        ],
        "size_gb": 665.16,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Long-term Frame-Event Visual Tracking: Benchmark Dataset and Baseline",
        "doi": "10.48550/arXiv.2403.05839",
        "authors": [
            "Xiao Wang",
            "Ju Huang",
            "Shiao Wang",
            "Chuanming Tang",
            "Bo Jiang",
            "Yonghong Tian",
            "Jin Tang",
            "Bin Luo"
        ],
        "abstract": "Current event-/frame-event based trackers undergo evaluation on short term tracking datasets, however, the tracking of real-world scenarios involves long-term tracking, and the performance of existing tracking algorithms in these scenarios remains unclear. In this paper, we first propose a new long-term and large-scale frame-event single object tracking dataset, termed FELT. It contains742 videos and 1,594,474 RGB frames and event stream pairs and has become the largest frame-event tracking dataset to date. We re-train and evaluate 15 baseline trackers on our dataset for future works to compare. More importantly, we find that the RGB frames and event streams are naturally incomplete due to the influence of challenging factors and spatially sparse event flow. In response to this, we propose a novel associative memory Transformer network as a unified backbone by introducing modern Hopfield layers into multi-head self-attention blocks to fuse both RGB and event data. Extensive experiments on RGB-Event (FELT),RGB-Thermal (RGBT234, LasHeR), and RGB-Depth (DepthTrack) datasets fully validated the effectiveness of our model. The dataset and source code can befound at https://github.com/Event-AHU/FELT_SOT_Benchmark.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "Google Scholar",
            "count": 3,
            "updated": "2025-01-06 16:07:20.222881"
        },
        {
            "source": "scholar",
            "count": 12,
            "updated": "2025-06-24T06:02:16.151307"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2403.05839"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2403.05839"
        },
        {
            "type": "github_page",
            "url": "https://github.com/Event-AHU/FELT_SOT_Benchmark"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_classes": "45",
        "num_categories": "14",
        "num_recordings": "742 recordings"
    },
    "bibtex": {
        "keywords": "Computer Science - Artificial Intelligence, Computer Science - Computer Vision and Pattern Recognition, Computer Science - Neural and Evolutionary Computing",
        "note": "arXiv:2403.05839 [cs]",
        "year": 2024,
        "month": "apr",
        "author": "Wang, Xiao and Huang, Ju and Wang, Shiao and Tang, Chuanming and Jiang, Bo and Tian, Yonghong and Tang, Jin and Luo, Bin",
        "publisher": "arXiv",
        "urldate": "2024-09-03",
        "language": "en",
        "doi": "10.48550/arXiv.2403.05839",
        "url": "http://arxiv.org/abs/2403.05839",
        "shorttitle": "Long-term {Frame}-{Event} {Visual} {Tracking}",
        "title": "Long-term {Frame}-{Event} {Visual} {Tracking}: {Benchmark} {Dataset} and {Baseline}",
        "type": "misc",
        "key": "wang_long-term_2024"
    }
}
---

### Dataset Structure

- Contains 45 classes of recordings
- Contains 14 different types of recprdomgs
- Contains 742 recordings
- Training Subset contains 520 videos and requires 470.23 GB
- Testing Subset contains 222 videos and requires 194.93GB

### Comparison Table

| Dataset        | Year | Videos | Frames    | Classes | Attributes | Resolution | Absent | Frame | Reality | LT  | Public |
| -------------- | ---- | ------ | --------- | ------- | ---------- | ---------- | ------ | ----- | ------- | --- | ------ |
| \[[VOT-DVS]\]  | 2016 | 60     | N/A       |         |            | 240x180    | N      | N     | N       | N   | Y      |
| \[[TD-DVS]\]   | 2016 | 77     | N/A       |         |            | 240x180    | N      | N     | N       | N   | Y      |
| \[[ULSTER]\]   | 2016 | 1      | 9,000     |         |            | 240x180    | N      | N     | Y       | Y   | N      |
| \[[EED]\]      | 2018 | 7      | 234       |         |            | 240x180    | N      | N     | Y       | N   | Y      |
| \[[FE108]\]    | 2021 | 108    | 208,672   | 21      | 4          | 346x260    | N      | N     | Y       | N   | Y      |
| \[[VisEvent]\] | 2021 | 820    | 371,127   |         | 17         | 346x260    | Y      | Y     | Y       | N   | Y      |
| \[[COESOT]\]   | 2022 | 1354   | 478,721   | 90      | 17         | 346x260    | Y      | Y     | Y       | N   | Y      |
| \[[EventVOT]\] | 2023 | 1141   | 569,359   | 19      | 14         | 1280x720   | Y      | N     | Y       | N   | Y      |
| \[[FELT]\]     | 2024 | 742    | 1,694,474 | 45      | 14         | 346x260    | Y      | Y     | Y       | Y   | Y      |
