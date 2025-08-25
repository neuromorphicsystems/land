---
{
    "name": "FACEMORPHIC",
    "aliases": [],
    "year": 2024,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Face Detection",
        "Lip-reading"
    ],
    "description": "Face Detection",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "Project page says the dataset is coming soon.",
        "dataset_links": []
    },
    "paper": {
        "title": "Neuromorphic Facial Analysis with Cross-Modal Supervision",
        "doi": "10.48550/arXiv.2409.10213",
        "authors": [
            "Federico Becattini",
            "Luca Cultrera",
            "Lorenzo Berlincioni",
            "Claudio Ferrari",
            "Andrea Leonardo",
            "Alberto Del Bimbo"
        ],
        "abstract": "Traditional approaches for analyzing RGB frames are capable of providing a fine-grained understanding of a face from different angles by inferring emotions, poses, shapes, landmarks. However, when it comes to subtle movements standard RGB cameras might fall behind due to their latency, making it hard to detect micro-movements that carry highly informative cues to infer the true emotions of a subject. To address this issue, the usage of event cameras to analyze faces is gaining increasing interest. Nonetheless, all the expertise matured for RGB processing is not directly transferrable to neuromorphic data due to a strong domain shift and intrinsic differences in how data is represented. The lack of labeled data can be considered one of the main causes of this gap, yet gathering data is harder in the event domain since it cannot be crawled from the web and labeling frames should take into account event aggregation rates and the fact that static parts might not be visible in certain frames. In this paper, we first present FACEMORPHIC, a multimodal temporally synchronized face dataset comprising both RGB videos and event streams. The data is labeled at a video level with facial Action Units and also contains streams collected with a variety of applications in mind, ranging from 3D shape estimation to lip-reading. We then show how temporal synchronization can allow effective neuromorphic face analysis without the need to manually annotate videos: we instead leverage cross-modal supervision bridging the domain gap by representing face shapes in a 3D space.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "scholar",
            "count": 4,
            "updated": "2025-06-05T22:28:47.559340"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2409.10213"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2409.10213"
        },
        {
            "type": "github_page",
            "url": "https://github.com/fedebecat/FACEMORPHIC_dataset"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "total_duration": "4 hours",
        "num_recordings": "3148",
        "num_classes": "24",
        "num_subjects": "64",
        "num_female": "16",
        "num_male": "48",
        "stereo": false
    },
    "bibtex": {
        "keywords": "Computer Science - Computer Vision and Pattern Recognition",
        "note": "arXiv:2409.10213 [cs]",
        "year": 2024,
        "month": "sep",
        "author": "Becattini, Federico and Cultrera, Luca and Berlincioni, Lorenzo and Ferrari, Claudio and Leonardo, Andrea and Bimbo, Alberto Del",
        "publisher": "arXiv",
        "urldate": "2024-12-01",
        "language": "en",
        "doi": "10.48550/arXiv.2409.10213",
        "url": "http://arxiv.org/abs/2409.10213",
        "title": "Neuromorphic {Facial} {Analysis} with {Cross}-{Modal} {Supervision}",
        "type": "misc",
        "key": "Becattini2024"
    }
}
---

### Dataset Structure

- Contains over 4 hours in 3148 recordings
- Contains 24 classes, each representing 24 different action units.
- Contains data from 64 subjects (16 females and 48 males)
-

### Comparison Table

| Dataset                           | Year | Videos | Duration | Users | Resolution | Task                 | Open Source | RGB |
| --------------------------------- | ---- | ------ | -------- | ----- | ---------- | -------------------- | ----------- | --- |
| \[[Face Pose Alignment Dataset]\] | 2020 | 108    | 10 min   | 18    | 304x240    | Face Pose Aligntment |             |     |
| \[[Face Detection]\]              | 2020 | 48     | 13 min.  | 10    | 640x480    | Face Detection       |             |     |
| \[[NEFER]\]                       | 2023 | 609    | 13 min.  | 29    | 1280x720   | Emotion Class.       | Y           | Y   |
| \[[EC Dataset]\]                  | 2018 | 360    | 28 min.  | 18    | 304 x 240  | Voice Activity Det.  |             |     |
| \[[event-reaction]\]              | 2022 | 455    | 75 min.  | 25    | 640x480    | Reaction Class.      |             | Y   |
| \[[EDDD]\]                        | 2020 | 260    | 86 min.  | 26    | 346 х 260  | Driving Monitoring   | Y           | Y   |
| \[[NVSFD]\]                       | 2022 | 432    | 180 min. | 40    |            | Identity Recognition |             |     |
| \[[DVS-Lip]\]                     | 2022 | 200    | 231 min. | 40    | 346x260    | Lip Reading          | Y           | Y   |
| \[[FES]\]                         | 2023 | 3889   | 689 min. | 73    | 408x360    | Face Detection       | Y           |     |
| \[[FACEMORPHIC]\]                 | 2024 | 3148   | 248 min. | 64    | 1280x720   | Action Unit Class.   | Y           | Y   |
