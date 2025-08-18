---
{
    "name": "evfly",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "V2E"
    ],
    "other_sensors": [],
    "category": "Robotic and Moving Vehicle Datasets",
    "subcategory": [
        "Flying Datasets",
        "Object Tracking"
    ],
    "task": "Aerial Obstacle Avoidance",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "HDF5"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://upenn.app.box.com/v/evfly-grasp-rpg/folder/297609854366",
                "format": "HDF5",
                "available": true
            }
        ],
        "size_gb": 105.2,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Monocular Event-Based Vision for Obstacle Avoidance with a Quadrotor",
        "doi": "10.48550/arXiv.2411.03303",
        "authors": [
            "Anish Bhattacharya",
            "Marco Cannici",
            "Nishanth Rao",
            "Yuezhan Tao",
            "Vijay Kumar",
            "Nikolai Matni",
            "Davide Scaramuzza"
        ],
        "abstract": "We present the first static-obstacle avoidance method for quadrotors using just an onboard, monocular event camera. Quadrotors are capable of fast and agile flight in cluttered environments when piloted manually, but vision-based autonomous flight in unknown environments is difficult in part due to the sensor limitations of traditional onboard cameras. Event cameras, however, promise nearly zero motion blur and high dynamic range, but produce a very large volume of events under significant ego-motion and further lack a continuous-time sensor model in simulation, making direct sim-to-real transfer not possible. By leveraging depth prediction as a pretext task in our learning framework, we can pre-train a reactive obstacle avoidance events-to-control policy with approximated, simulated events and then fine-tune the perception component with limited events-and-depth real-world data to achieve obstacle avoidance in indoor and outdoor settings. We demonstrate this across two quadrotor-event camera platforms in multiple settings and find, contrary to traditional vision-based works, that low speeds (1m/s) make the task harder and more prone to collisions, while high speeds (5m/s) result in better event-based depth estimation and avoidance. We also find that success rates in outdoor scenes can be significantly higher than in certain indoor scenes.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "Google Scholar",
            "count": 1,
            "updated": "2025-01-10 11:48:15.673767"
        },
        {
            "source": "scholar",
            "count": 5,
            "updated": "2025-06-15T10:17:37.429345"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2411.03303"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2411.03303"
        },
        {
            "type": "project_page",
            "url": "https://www.anishbhattacharya.com/research/evfly"
        },
        {
            "type": "github_page",
            "url": "https://github.com/anish-bhattacharya/evfly"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "keywords": "Computer Science - Robotics",
        "note": "arXiv:2411.03303 [cs]",
        "year": 2024,
        "month": "nov",
        "author": "Bhattacharya, Anish and Cannici, Marco and Rao, Nishanth and Tao, Yuezhan and Kumar, Vijay and Matni, Nikolai and Scaramuzza, Davide",
        "publisher": "arXiv",
        "urldate": "2025-01-10",
        "language": "en",
        "doi": "10.48550/arXiv.2411.03303",
        "url": "http://arxiv.org/abs/2411.03303",
        "title": "Monocular {Event}-{Based} {Vision} for {Obstacle} {Avoidance} with a {Quadrotor}",
        "type": "misc",
        "key": "bhattacharya_monocular_2024"
    }
}
---


### Dataset Structure