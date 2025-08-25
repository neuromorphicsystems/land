---
{
    "name": "BiasBench",
    "aliases": [],
    "year": 2025,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [],
    "category": "Benchmarking, SNN Training Task, and SNN Training",
    "tags": [
        "Bias Tuning"
    ],
    "description": "Automatic Bias Tuning",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": true,
        "distribution_methods": [],
        "file_formats": [
            "HDF5"
        ],
        "availability_comment": "Dataset link in Github repository is not yet active.",
        "dataset_links": []
    },
    "paper": {
        "title": "BiasBench: A reproducible benchmark for tuning the biases of event cameras",
        "doi": "10.48550/arXiv.2504.18235v1",
        "authors": [
            "Andreas Ziegler",
            "David Joseph",
            "Thomas Gossard",
            "Emil Moldovan",
            "Andreas Zell"
        ],
        "abstract": "Event-based cameras are bio-inspired sensors that detect light changes asynchronously for each pixel. They are increasingly used in fields like computer vision and robotics because of several advantages over traditional frame-based cameras, such as high temporal resolution, low latency, and high dynamic range. As with any camera, the output's quality depends on how well the camera's settings, called biases for event-based cameras, are configured. While frame-based cameras have advanced automatic configuration algorithms, there are very few such tools for tuning these biases. A systematic testing framework would require observing the same scene with different biases, which is tricky since event cameras only generate events when there is movement. Event simulators exist, but since biases heavily depend on the electrical circuit and the pixel design, available simulators are not well suited for bias tuning. To allow reproducibility, we present BiasBench, a novel event dataset containing multiple scenes with settings sampled in a grid-like pattern. We present three different scenes, each with a quality metric of the downstream application. Additionally, we present a novel, RL-based method to facilitate online bias adjustments.",
        "open_access": false
    },
    "citation_counts": [],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2504.18235"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2504.18235v1"
        },
        {
            "type": "project_page",
            "url": "https://cogsys-tuebingen.github.io/biasbench/"
        },
        {
            "type": "github_page",
            "url": "https://github.com/cogsys-tuebingen/biasbench"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "url": "https://arxiv.org/abs/2504.18235",
        "primaryclass": "cs.CV",
        "archiveprefix": "arXiv",
        "eprint": "2504.18235",
        "year": 2025,
        "author": "Andreas Ziegler and David Joseph and Thomas Gossard and Emil Moldovan and Andreas Zell",
        "title": "BiasBench: A reproducible benchmark for tuning the biases of event cameras",
        "type": "misc",
        "key": "Ziegler2025cvprw"
    }
}
---

### Dataset Structure

- Dataset contains three different sets of data
  - Spinning Dot
  - Blinking LED Board
  - Visual Odometry
