---
{
    "name": "Slip Dataset",
    "aliases": [],
    "year": 2020,
    "modality": [
        "Tactile",
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen3"
    ],
    "other_sensors": [],
    "category": "Other Modalities",
    "tags": [
        "Tactomorphics"
    ],
    "description": "Visual-Tactile Perception",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": true,
        "distribution_methods": [
            "Google Drive",
            "Dropbox"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "Google Drive links on Github no longer work. Files from Project Page can be downloaded from Dropbox",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://github.com/clear-nus/VT_SNN",
                "format": "Numpy",
                "available": true
            },
            {
                "name": "Dropbox",
                "url": "https://github.com/clear-nus/VT_SNN",
                "format": "Numpy",
                "available": true
            }
        ],
        "size_gb": 4.4,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Event-Driven Visual-Tactile Sensing and Learning for Robots",
        "doi": "10.15607/rss.2020.xvi.020",
        "authors": [
            "Tasbolat Taunyazov",
            "Weicong Sng",
            "Brian Lim",
            "Hian Hian See",
            "Jethro Kuan",
            "Abdul Fatir Ansari",
            "Benjamin Tee",
            "Harold Soh"
        ],
        "abstract": "This work contributes an event-driven visual-tactile perception system, comprising a novel biologically-inspired tactile sensor and multi-modal spike-based learning. Our neuromorphic fingertip tactile sensor, NeuTouch, scales well with the number of taxels thanks to its event-based nature. Likewise, our Visual-Tactile Spiking Neural Network (VT-SNN) enables fast perception when coupled with event sensors. We evaluate our visual-tactile system (using the NeuTouch and Prophesee event camera) on two robot tasks: container classification and rotational slip detection. On both tasks, we observe good accuracies relative to standard deep learning methods. We have made our visual-tactile datasets freely-available to encourage research on multi-modal event-driven robot perception, which we believe is a promising approach towards intelligent power-efficient robot systems.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 69,
            "updated": "2025-06-13T11:43:17.071606"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2009.07083"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2009.07083"
        },
        {
            "type": "project_page",
            "url": "https://clear-nus.github.io/visuotactile/"
        },
        {
            "type": "github_page",
            "url": "https://github.com/clear-nus/VT_SNN"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "100",
        "num_classes": "2"
    },
    "bibtex": {
        "year": 2020,
        "month": "jul",
        "author": "Taunyazov, Tasbolat and Sng, Weicong and Lim, Brian and Hian See, Hian and Kuan, Jethro and Fatir Ansari, Abdul and Tee, Benjamin and Soh, Harold",
        "publisher": "Robotics: Science and Systems Foundation",
        "booktitle": "Robotics: {Science} and {Systems} {XVI}",
        "urldate": "2024-12-01",
        "language": "en",
        "doi": "10.15607/RSS.2020.XVI.020",
        "url": "http://www.roboticsproceedings.org/rss16/p020.pdf",
        "isbn": "978-0-9923747-6-1",
        "title": "Event-{Driven} {Visual}-{Tactile} {Sensing} and {Learning} for {Robots}",
        "type": "inproceedings",
        "key": "taunyazov_event-driven_2020"
    },
    "referenced_papers": []
}
---

### Dataset Structure

- Contains 100 recordings in 2 classes (50 with rotational slip and 50 without rotational slip)
