---
{
    "name": "EVIMO2",
    "aliases": [],
    "year": 2022,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen3",
        "Samsung DVS"
    ],
    "other_sensors": [
        "Flea3"
    ],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "subcategory": [
        "Motion Segmentation",
        "Optical Flow",
        "Visual Odometry"
    ],
    "task": "Motion Segmentation",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "Download link is a script that will directly download that dataset files",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://github.com/better-flow/evimo/blob/master/tools/evimo2_v2_downloader/download_evimo2_v2.sh",
                "format": "Numpy",
                "available": true
            }
        ],
        "size_gb": 525.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Evimo2 -  An event camera dataset for motion segmentation, optical flow, structure from motion, and visual inertial odometry in indoor scenes with monocular or stereo algorithms",
        "doi": "10.48550/arXiv.2205.03467",
        "authors": [
            "Levi Burner",
            "Anton Mitrokhin",
            "Cornelia Ferm\u00fcller",
            "Yiannis Aloimonos"
        ],
        "abstract": "A new event camera dataset, EVIMO2, is introduced that improves on the popular EVIMO dataset by providing more data, from better cameras, in more complex scenarios. As with its predecessor, EVIMO2 provides labels in the form of per-pixel ground truth depth and segmentation as well as camera and object poses. All sequences use data from physical cameras and many sequences feature multiple independently moving objects. Typically, such labeled data is unavailable in physical event camera datasets. Thus, EVIMO2 will serve as a challenging benchmark for existing algorithms and rich training set for the development of new algorithms. In particular, EVIMO2 is suited for supporting research in motion and object segmentation, optical flow, structure from motion, and visual (inertial) odometry in both monocular or stereo configurations.   EVIMO2 consists of 41 minutes of data from three 640$\\times$480 event cameras, one 2080$\\times$1552 classical color camera, inertial measurements from two six axis inertial measurement units, and millimeter accurate object poses from a Vicon motion capture system. The dataset's 173 sequences are arranged into three categories. 3.75 minutes of independently moving household objects, 22.55 minutes of static scenes, and 14.85 minutes of basic motions in shallow scenes. Some sequences were recorded in low-light conditions where conventional cameras fail. Depth and segmentation are provided at 60 Hz for the event cameras and 30 Hz for the classical camera. The masks can be regenerated using open-source code up to rates as high as 200 Hz.   This technical report briefly describes EVIMO2. The full documentation is available online. Videos of individual sequences can be sampled on the download page.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "Google Scholar",
            "count": 25,
            "updated": "2025-01-05 22:37:11.666114"
        },
        {
            "source": "scholar",
            "count": 33,
            "updated": "2025-06-14T14:58:24.468088"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2205.03467"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2205.03467"
        },
        {
            "type": "project_page",
            "url": "https://better-flow.github.io/evimo/download_evimo_2.html"
        },
        {
            "type": "github_page",
            "url": "https://github.com/better-flow/evimo"
        }
    ],
    "full_name": "An Event Camera Dataset for Motion Segmentation, Optical Flow, Structure from Motion, and Visual Inertial Odometry",
    "additional_metadata": {
        "stereo": true
    },
    "connected_datasets": [
        "EVIMO1"
    ],
    "bibtex": {
        "keywords": "Computer Science - Computer Vision and Pattern Recognition, Computer Science - Robotics",
        "note": "arXiv:2205.03467 [cs]",
        "year": 2022,
        "month": "may",
        "author": "Burner, Levi and Mitrokhin, Anton and Ferm\u00fcller, Cornelia and Aloimonos, Yiannis",
        "publisher": "arXiv",
        "urldate": "2024-12-11",
        "language": "en",
        "doi": "10.48550/arXiv.2205.03467",
        "url": "http://arxiv.org/abs/2205.03467",
        "shorttitle": "{EVIMO2}",
        "title": "{EVIMO2}: {An} {Event} {Camera} {Dataset} for {Motion} {Segmentation}, {Optical} {Flow}, {Structure} from {Motion}, and {Visual} {Inertial} {Odometry} in {Indoor} {Scenes} with {Monocular} or {Stereo} {Algorithms}",
        "type": "misc",
        "key": "burner_evimo2_2022"
    }
}
---


### Dataset Structure 

The dataset has excellent documentation available at https://better-flow.github.io/evimo/docs/.