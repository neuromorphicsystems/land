---
{
    "name": "SAD",
    "aliases": [],
    "year": 2024,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "Spike Camera"
    ],
    "other_sensors": [],
    "category": "Domain Specific Application",
    "tags": [
        "Autofocus",
        "Microscopy"
    ],
    "description": "Intensity-robust autofocus",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "Binary"
        ],
        "availability_comment": "Dataset is compressed using 7zip",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/file/d/1WTjYB-PfN1pq4U7130yWqdImiolAS5Se/view",
                "format": "Binary",
                "available": true
            }
        ],
        "size_gb": 2.1,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Intensity-Robust Autofocus for Spike Camera",
        "doi": "10.1109/CVPR52733.2024.02363",
        "authors": [
            "Changqing Su",
            "Zhiyuan Ye",
            "Yongsheng Xiao",
            "You Zhou",
            "Zhen Cheng",
            "Bo Xiong",
            "Zhaofei Yu",
            "Tiejun Huang"
        ],
        "abstract": "Spike cameras, a novel neuromorphic visual sensor, can capture full-time spatial information through spike stream, offering ultra-high temporal resolution and an extensive dy-namic range. Autofocus control (AC) plays a pivotal role in a camera to efficiently capture information in challenging real-world scenarios. Nevertheless, due to disparities in data modality and information characteristics compared to frame stream and event stream, the current lack of effi-cient AC methods has made it challenging for spike cam-eras to adapt to intricate real-world conditions. To ad-dress this challenge, we introduce a spike-based autofo-cus framework that includes a spike-specific focus measure called spike dispersion (SD), which effectively mitigates the influence of variations in scene light intensity during the focusing process by leveraging the spike camera's ability to record full-time spatial light intensity. Additionally, the framework integrates a fast search strategy called spike-based goldenfast search (SGFS), allowing rapidfocal positioning without the need for a complete focus range traver-sal. To validate the performance of our method, we have collected a spike-based autofocus dataset (SAD) containing synthetic data and real-world data under varying scene brightness and motion scenarios. Experimental results on these datasets demonstrate that our method offers state-of-the-art accuracy and efficiency. Furthermore, experiments with data captured under varying scene brightness levels illustrate the robustness of our method to changes in light intensity during the focusing process.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 0,
            "updated": "2025-07-08T14:52:21.253769"
        },
        {
            "source": "scholar",
            "count": 4,
            "updated": "2025-07-08T14:52:20.991457"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://openaccess.thecvf.com/content/CVPR2024/papers/Su_Intensity-Robust_Autofocus_for_Spike_Camera_CVPR_2024_paper.pdf#page=6.36"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10654950"
        },
        {
            "type": "github_page",
            "url": "https://github.com/Onetism/saf-code"
        }
    ],
    "full_name": "Spike Autofocus Dataset (SAD)",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "doi": "10.1109/CVPR52733.2024.02363",
        "keywords": "Visualization;Neuromorphics;Brightness;Focusing;Cameras;Search problems;Robustness",
        "pages": "25018-25027",
        "number": "",
        "volume": "",
        "year": 2024,
        "title": "Intensity-Robust Autofocus for Spike Camera",
        "booktitle": "2024 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
        "author": "Su, Changqing and Ye, Zhiyuan and Xiao, Yongsheng and Zhou, You and Cheng, Zhen and Xiong, Bo and Yu, Zhaofei and Huang, Tiejun",
        "type": "inproceedings",
        "key": "10654950"
    },
    "referenced_papers": []
}
---

### Dataset Structure
