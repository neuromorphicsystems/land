---
{
    "name": "MMDVS-LF",
    "aliases": [],
    "year": 2024,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [
        "Logitech C930e"
    ],
    "category": "Robotic and Moving Vehicle Datasets",
    "tags": [
        "Line Segmentation",
        "Line Following",
        "Eye Tracking",
        "Driver Monitoring"
    ],
    "description": "Line Following",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [
            "ROSbag"
        ],
        "availability_comment": "",
        "dataset_links": [],
        "size_gb": 11.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "MMDVS-LF: A Multi-Modal Dynamic-Vision-Sensor Line Following Dataset",
        "doi": "10.48550/arXiv.2409.18038",
        "authors": [
            "Felix Resch",
            "M\u00f3nika Farsang",
            "Radu Grosu"
        ],
        "abstract": "Dynamic Vision Sensors (DVS), offer a unique advantage in control applications, due to their high temporal resolution, and asynchronous event-based data. Still, their adoption in machine learning algorithms remains limited. To address this gap, and promote the development of models that leverage the specific characteristics of DVS data, we introduce the Multi-Modal Dynamic-Vision-Sensor Line Following dataset (MMDVS-LF). This comprehensive dataset, is the first to integrate multiple sensor modalities, including DVS recordings, RGB video, odometry, and Inertial Measurement Unit (IMU) data, from a small-scale standardized vehicle. Additionally, the dataset includes eye-tracking and demographic data of drivers performing a Line Following task on a track. With its diverse range of data, MMDVS-LF opens new opportunities for developing deep learning algorithms, and conducting data science projects across various domains, supporting innovation in autonomous systems and control applications.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "Google Scholar",
            "count": 0,
            "updated": "2025-01-04 17:33:36.921545"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2409.18038"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2409.18038"
        },
        {
            "type": "github_page",
            "url": "https://github.com/CPS-TUWien/mmdvs"
        }
    ],
    "full_name": "Multi-Modal Dynamic Vision Sensor and Eye-Tracking and Line Following (MMDVS-LF) Dataset",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "keywords": "Computer Science - Robotics",
        "note": "arXiv:2409.18038 [cs]",
        "year": 2024,
        "month": "sep",
        "author": "Resch, Felix and Farsang, M\u00f3nika and Grosu, Radu",
        "publisher": "arXiv",
        "urldate": "2024-09-30",
        "language": "en",
        "doi": "10.48550/arXiv.2409.18038",
        "url": "http://arxiv.org/abs/2409.18038",
        "shorttitle": "{MMDVS}-{LF}",
        "title": "{MMDVS}-{LF}: {A} {Multi}-{Modal} {Dynamic}-{Vision}-{Sensor} {Line} {Following} {Dataset}",
        "type": "misc",
        "key": "resch_mmdvs-lf_2024"
    }
}
---

### Dataset Structure

### Comparison Table

^a40c5f

| **Dataset**             | **Task**         | **Annotation** | **DVS**   | **Inputs** | **IMU** | **Frames** | **Depth** | **Amount**  |
| ----------------------- | ---------------- | -------------- | --------- | ---------- | ------- | ---------- | --------- | ----------- |
| \[[EventVOT]\]          | Detection        | Manual         | 1280x720  |            |         | Y          |           | 249.92GB    |
| \[[FELT]\]              | Detection        | Manual         | 346x260   |            |         | Y          |           | 664.78GB    |
| \[[ADD]\]               | Detection        | Automatic      | 1280x720  |            |         |            |           | 15h/3.5TB   |
| \[[MVSEC]\]             | Depth Estimation | Implicit       | 2x346x260 |            | Y       | Y          | Y         | 186.62GB    |
| \[[DSEC]\]              | Depth Estimation | Implicit       | 2x640×480 |            | Y       | Y          | Y         | 453GB       |
| \[[ViViD++]\] (Driving) | Visual SLAM      | Implicit       | 640x480   |            | Y       | Y          | Y         | 4:19h       |
| \[[PRED18]\]            | Following        | Manual         | 36x36     |            |         | Y          |           | 1:h15       |
| \[[DDD17]\]             | Driving          | Implicit       | 346x260   | Y          |         | Y          |           | 12:00h      |
| \[[DDD20]\]             | Driving          | Implicit       | 346x260   | Y          |         | Y          |           | 51:00h      |
| \[[MMDVS-LF]\]          | Line Following   | Manual         | 1280x720  | Y          | Y       | Y          | Y         | 37:55m/11GB |

^a3cc21
