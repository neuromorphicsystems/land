---
{
    "name": "SLED",
    "aliases": [],
    "year": 2023,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "CARLA"
    ],
    "other_sensors": [],
    "category": "Depth, Stereo, and 3D Reconstruction",
    "tags": [
        "Driving Dataset",
        "Depth Estimation",
        "Lidar"
    ],
    "description": "Depth from event-based LiDAR data",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "Dataset link n",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://datasets.hds.utc.fr/share/g1z78rPKp1ykVe6",
                "format": "Numpy",
                "available": true
            }
        ],
        "size_gb": 500.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Learning to Estimate Two Dense Depths from LiDAR and Event Data",
        "doi": "10.1007/978-3-031-31438-4_34",
        "authors": [
            "Vincent Brebion",
            "Julien Moreau",
            "Franck Davoine"
        ],
        "abstract": "Event cameras do not produce images, but rather a continuous flow of events, which encode changes of illumination for each pixel independently and asynchronously. While they output temporally rich information, they lack any depth information which could facilitate their use with other sensors. LiDARs can provide this depth information, but are by nature very sparse, which makes the depth-to-event association more complex. Furthermore, as events represent changes of illumination, they might also represent changes of depth; associating them with a single depth is therefore inadequate. In this work, we propose to address these issues by fusing information from an event camera and a LiDAR using a learning-based approach to estimate accurate dense depth maps. To solve the \"potential change of depth\" problem, we propose here to estimate two depth maps at each step: one \"before\" the events happen, and one \"after\" the events happen. We further propose to use this pair of depths to compute a depth difference for each event, to give them more context. We train and evaluate our network, ALED, on both synthetic and real driving sequences, and show that it is able to predict dense depths with an error reduction of up to 61% compared to the current state of the art. We also demonstrate the quality of our 2-depths-to-event association, and the usefulness of the depth difference information. Finally, we release SLED, a novel synthetic dataset comprising events, LiDAR point clouds, RGB images, and dense depth maps.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 4,
            "updated": "2024-12-14 11:20:38.064731"
        },
        {
            "source": "scholar",
            "count": 9,
            "updated": "2025-06-26T11:00:58.572107"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2302.14444"
        },
        {
            "type": "paper",
            "url": "https://link.springer.com/chapter/10.1007/978-3-031-31438-4_34"
        },
        {
            "type": "project_page",
            "url": "https://vbrebion.github.io/ALED/"
        }
    ],
    "full_name": "Synthetic LiDAR Events Depths (SLED)",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "517--533",
        "note": "Series Title: Lecture Notes in Computer Science",
        "doi": "10.1007/978-3-031-31438-4_34",
        "year": 2023,
        "editor": "Gade, Rikke and Felsberg, Michael and K\u00e4m\u00e4r\u00e4inen, Joni-Kristian",
        "author": "Brebion, Vincent and Moreau, Julien and Davoine, Franck",
        "publisher": "Springer Nature Switzerland",
        "booktitle": "Image {Analysis}",
        "urldate": "2024-12-14",
        "language": "en",
        "url": "https://link.springer.com/10.1007/978-3-031-31438-4_34",
        "isbn": "978-3-031-31437-7 978-3-031-31438-4",
        "volume": "13886",
        "title": "Learning to {Estimate} {Two} {Dense} {Depths} from {LiDAR} and {Event} {Data}",
        "address": "Cham",
        "type": "inproceedings",
        "key": "gade_learning_2023"
    }
}
---

### Dataset Structure
