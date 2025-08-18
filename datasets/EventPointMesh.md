---
{
    "name": "EventPointMesh",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [
        "OptiTrack"
    ],
    "category": "Human-centric Recordings",
    "subcategory": [
        "Human Pose Recognition"
    ],
    "task": "Human Mesh Estimation",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "Form submission required to access dataset",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/drive/folders/1tlaTRy0T8LmfzgTQN2X0x1LoCoraJivq",
                "format": "Numpy",
                "available": true
            }
        ],
        "size_gb": 131.22,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "EventPointMesh: Human Mesh Recovery Solely From Event Point Clouds",
        "doi": "10.1109/TVCG.2024.3462816",
        "authors": [
            "Ryosuke Hori",
            "Mariko Isogawa",
            "Dan Mikami",
            "Hideo Saito"
        ],
        "abstract": "How much can we infer about human shape using an event camera that only detects the pixel position where the luminance changed and its timestamp? This neuromorphic vision technology captures changes in pixel values at ultra-high speeds, regardless of the variations in environmental lighting brightness. Existing methods for human mesh recovery (HMR) from event data need to utilize intensity images captured with a generic frame-based camera, rendering them vulnerable to low-light conditions, energy/memory constraints, and privacy issues. In contrast, we explore the potential of solely utilizing event data to alleviate these issues and ascertain whether it offers adequate cues for HMR, as illustrated in Fig. 1. This is a quite challenging task due to the substantially limited information ensuing from the absence of intensity images. To this end, we propose EventPointMesh, a framework which treats event data as a three-dimensional (3D) spatio-temporal point cloud for reconstructing the human mesh. By employing a coarse-to-fine pose feature extraction strategy, we extract both global features and local features. The local features are derived by processing the spatio-temporally dispersed event points into groups associated with individual body segments. This combination of global and local features allows the framework to achieve a more accurate HMR, capturing subtle differences in human movements. Experiments demonstrate that our method with only sparse event data outperforms baseline methods. The dataset and code will be available at https://github.com/RyosukeHori/EventPointMesh .",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 1,
            "updated": "2025-06-15T19:25:16.160870"
        },
        {
            "source": "scholar",
            "count": 1,
            "updated": "2025-06-15T19:25:16.023469"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10683888"
        },
        {
            "type": "project_page",
            "url": "https://ryosukehori.github.io/EPM_ProjectPage/"
        },
        {
            "type": "github_page",
            "url": "https://github.com/RyosukeHori/EventPointMesh"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "180",
        "num_subjects": "15",
        "num_males": "11",
        "num_females": "4",
        "num_classes": "21",
        "stereo": false
    },
    "bibtex": {
        "pages": "1--18",
        "year": 2024,
        "author": "Hori, Ryosuke and Isogawa, Mariko and Mikami, Dan and Saito, Hideo",
        "journal": "IEEE Transactions on Visualization and Computer Graphics",
        "urldate": "2024-12-15",
        "language": "en",
        "doi": "10.1109/TVCG.2024.3462816",
        "url": "https://ieeexplore.ieee.org/document/10683888/",
        "shorttitle": "{EventPointMesh}",
        "issn": "1077-2626, 1941-0506, 2160-9306",
        "copyright": "https://creativecommons.org/licenses/by-nc-nd/4.0/",
        "title": "{EventPointMesh}: {Human} {Mesh} {Recovery} {Solely} {From} {Event} {Point} {Clouds}",
        "type": "article",
        "key": "hori_eventpointmesh_2024"
    },
    "referenced_papers": []
}
---

### Dataset Structure

- Contains 180 recordings from 15 (11 males and 4)
- Contains 21 different actions

| Dataset               | Sequences | Sub | Frame Pose |     | Shape | Poorly-lit Env. |
| --------------------- | --------- | --- | ---------- | --- | ----- | --------------- |
| \[[DHP19]\]           | 33        | 17  | 87k        | Yes | No    | No              |
| \[[YeLan]\] Synthetic | 8         | 10  | 4M         | Yes | No    | Yes             |
| \[[YeLan]\] Real      | 4         | 9   | 446k       | Yes | No    | Yes             |
| \[[EventCap]\]        | 2         | 6   | N/A        | N/A | N/A   | N/A             |
| \[[EventHPE]\]        | 12        | 15  | 240k       | Yes | Yes   | No              |
| \[[EPMD]\]            | 16        | 3   | 228k       | Yes | Yes   | Yes             |
