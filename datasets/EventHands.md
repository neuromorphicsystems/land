---
{
    "name": "EventHands",
    "aliases": [],
    "year": 2021,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS240"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "subcategory": [
        "Hand Pose Detection",
        "Sign Language"
    ],
    "task": "Hand Tracking",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "NextCloud"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "Sign-up page required to download data. No response to account generation request",
        "dataset_links": [
            {
                "name": "NextCloud",
                "url": "https://nextcloud.mpi-klsb.mpg.de/index.php/s/DBJHfoMApyK53S2",
                "format": "Numpy",
                "available": true
            }
        ],
        "size_gb": 291.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "EventHands -  Real-Time Neural 3D Hand Pose Estimation from an Event Stream",
        "doi": "10.1109/ICCV48922.2021.01216",
        "authors": [
            "Viktor Rudnev",
            "Vladislav Golyanik",
            "Jiayi Wang",
            "Hans-Peter Seidel",
            "Franziska Mueller",
            "Mohamed Elgharib",
            "Christian Theobalt"
        ],
        "abstract": "3D hand pose estimation from monocular videos is a long-standing and challenging problem, which is now seeing a strong upturn. In this work, we address it for the first time using a single event camera, i.e., an asynchronous vision sensor reacting on brightness changes. Our EventHands approach has characteristics previously not demonstrated with a single RGB or depth camera such as high temporal resolution at low data throughputs and real-time performance at 1000 Hz. Due to the different data modality of event cameras compared to classical cameras, existing methods cannot be directly applied to and re-trained for event streams. We thus design a new neural approach which accepts a new event stream representation suitable for learning, which is trained on newly-generated synthetic event streams and can generalise to real data. Experiments show that EventHands outperforms recent monocular methods using a colour (or depth) camera in terms of accuracy and its ability to capture hand motions of unprecedented speed. Our method, the event stream simulator and the dataset are publicly available (see https://4dqv.mpi-inf.mpg.de/EventHands/).",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 27,
            "updated": "2024-10-26 12:54:01.401506"
        },
        {
            "source": "scholar",
            "count": 65,
            "updated": "2025-06-15T19:13:01.819581"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2012.06475"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9711380"
        },
        {
            "type": "project_page",
            "url": "https://4dqv.mpi-inf.mpg.de/EventHands/"
        },
        {
            "type": "github_page",
            "url": "https://github.com/r00tman/EventHands"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "total_duration": "1252.6 seconds"
    },
    "bibtex": {
        "pages": "12365--12375",
        "year": 2021,
        "month": "oct",
        "author": "Rudnev, Viktor and Golyanik, Vladislav and Wang, Jiayi and Seidel, Hans-Peter and Mueller, Franziska and Elgharib, Mohamed and Theobalt, Christian",
        "publisher": "IEEE",
        "booktitle": "2021 {IEEE}/{CVF} {International} {Conference} on {Computer} {Vision} ({ICCV})",
        "urldate": "2024-04-13",
        "language": "en",
        "doi": "10.1109/ICCV48922.2021.01216",
        "url": "https://ieeexplore.ieee.org/document/9711380/",
        "shorttitle": "{EventHands}",
        "isbn": "978-1-66542-812-5",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "{EventHands}: {Real}-{Time} {Neural} {3D} {Hand} {Pose} {Estimation} from an {Event} {Stream}",
        "address": "Montreal, QC, Canada",
        "type": "inproceedings",
        "key": "rudnev_eventhands_2021"
    }
}
---

### Dataset Structure

- Contains both real data from a DAVIS240C and simulated data from conventional images using a custom conversion method.
- Contains a total of 1252.6 secondsSynthetic data contains 1240 seconds of data and 12.6 seconds of real data.
-

```bibtext
@inproceedings{rudnev2021eventhands, 
      title={EventHands: Real-Time Neural 3D Hand Pose Estimation from an Event Stream}, 
      author={Viktor Rudnev and Vladislav Golyanik and Jiayi Wang and Hans-Peter Seidel and Franziska Mueller and Mohamed Elgharib and Christian Theobalt}, 
      booktitle={International Conference on Computer Vision (ICCV)}, 
      year={2021} 
}
```
