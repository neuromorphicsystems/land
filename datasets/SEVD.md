---
{
    "name": "SEVD",
    "aliases": [],
    "full_name": "",
    "year": 2024,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "CARLA"
    ],
    "other_sensors": [],
    "category": "Robotic and Moving Vehicle Datasets",
    "tags": [
        "Traffic Monitoring",
        "Pedestrian Detection",
        "Vehicle Detection"
    ],
    "description": "Traffic monitoring",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "OneDrive"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "OneDrive",
                "url": "https://arizonastateu-my.sharepoint.com/personal/bshettah_asurite_asu_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fbshettah%5Fasurite%5Fasu%5Fedu%2FDocuments%2FSEVD&ga=1",
                "format": "Numpy",
                "available": true
            }
        ],
        "size_gb": 20.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "SEVD -  Synthetic Event-based Vision Dataset for Ego and Fixed Traffic Perception",
        "doi": "10.48550/arXiv.2404.10540",
        "authors": [
            "Manideep Reddy Aliminati",
            "Bharatesh Chakravarthi",
            "Aayush Atul Verma",
            "Arpitsinh Vaghela",
            "Hua Wei",
            "Xuesong Zhou",
            "Yezhou Yang"
        ],
        "abstract": "Recently, event-based vision sensors have gained attention for autonomous driving applications, as conventional RGB cameras face limitations in handling challenging dynamic conditions. However, the availability of real-world and synthetic event-based vision datasets remains limited. In response to this gap, we present SEVD, a first-of-its-kind multi-view ego, and fixed perception synthetic event-based dataset using multiple dynamic vision sensors within the CARLA simulator. Data sequences are recorded across diverse lighting (noon, nighttime, twilight) and weather conditions (clear, cloudy, wet, rainy, foggy) with domain shifts (discrete and continuous). SEVD spans urban, suburban, rural, and highway scenes featuring various classes of objects (car, truck, van, bicycle, motorcycle, and pedestrian). Alongside event data, SEVD includes RGB imagery, depth maps, optical flow, semantic, and instance segmentation, facilitating a comprehensive understanding of the scene. Furthermore, we evaluate the dataset using state-of-the-art event-based (RED, RVT) and frame-based (YOLOv8) methods for traffic participant detection tasks and provide baseline benchmarks for assessment. Additionally, we conduct experiments to assess the synthetic event-based dataset's generalization capabilities. The dataset is available at this https URL",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "scholar",
            "count": 6,
            "updated": "2025-06-03T11:27:10.221393"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2404.10540"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2404.10540"
        },
        {
            "type": "project_page",
            "url": "https://eventbasedvision.github.io/SEVD/#"
        },
        {
            "type": "github_page",
            "url": "https://github.com/eventbasedvision/SEVD"
        }
    ],
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "keywords": "Computer Science - Computer Vision and Pattern Recognition, Computer Science - Machine Learning",
        "note": "arXiv:2404.10540 [cs]",
        "year": 2024,
        "month": "apr",
        "author": "Aliminati, Manideep Reddy and Chakravarthi, Bharatesh and Verma, Aayush Atul and Vaghela, Arpitsinh and Wei, Hua and Zhou, Xuesong and Yang, Yezhou",
        "publisher": "arXiv",
        "urldate": "2024-11-02",
        "language": "en",
        "doi": "10.48550/arXiv.2404.10540",
        "url": "http://arxiv.org/abs/2404.10540",
        "shorttitle": "{SEVD}",
        "title": "{SEVD}: {Synthetic} {Event}-based {Vision} {Dataset} for {Ego} and {Fixed} {Traffic} {Perception}",
        "type": "misc",
        "key": "Aliminati2024"
    }
}
---

### Dataset Structure

Dataset has a form required before accessing the data. The form has an agreement that must be accepted before providing a download link.

https://www.google.com/url?q=https://arizonastateu-my.sharepoint.com/:f:/g/personal/bshettah_asurite_asu_edu/EuH0vBFXO3dPgFW5UOl51ogBufhEjJIstVfOrAEGEj1hmA?e%3DsVzvHm&sa=D&source=editors&ust=1730526289364272&usg=AOvVaw2zNRss26b5sPa8T1U5zvgS

```bibtex
@article{aliminati2024sevd,
  title={SEVD: Synthetic Event-based Vision Dataset for Ego and Fixed Traffic Perception},
  author={Aliminati, Manideep Reddy and Chakravarthi, Bharatesh and Verma, Aayush Atul and Vaghela, Arpitsinh and Wei, Hua and Zhou, Xuesong and Yang, Yezhou},
  journal={arXiv preprint arXiv:2404.10540},
  year={2024}
}
```

| Dataset                      | Year | Event Camera                  | Perspective Ego | Perspective Fixed | Objects VH | Objects Ped | Objects MM | Light DY | Light NT | Light TW | Weather CLR | Weather CDY | Weather RNY | Weather FGY | Multi-view                                               | Other Sensors                                      | Scene                                                | Other Information                                    |
| ---------------------------- | ---- | ----------------------------- | --------------- | ----------------- | ---------- | ----------- | ---------- | -------- | -------- | -------- | ----------- | ----------- | ----------- | ----------- | -------------------------------------------------------- | -------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| \[[DDD17]\]                  | 2017 | DAVIS 346B 346 x 260 px       | ✓               |                   | ✓          |             |            | ✓        | ✓        | ✓        |             |             | ✓           |             |                                                          | RGB                                                | Freeway, Highway, City                               | 12 hr, HDF5 format                                   |
| \[[MVSEC ]\]                 | 2018 | DAVIS 346B 346 x 260 px       | ✓               |                   | ✓          |             |            | ✓        |          |          |             |             |             |             | ✓ (2 event cameras used)                                 | RGB, VLP-16 Lidar, GPS                             | Indoor, Outdoor                                      | ~ 1 hr, rosbag format                                |
| \[[N-Cars]\]                 | 2018 | Prophesee Gen1 304 x 240 px   | ✓               |                   | ✓          |             |            |          |          |          |             |             |             |             |                                                          | -                                                  | Urban                                                | 1.2 hr, DAT format                                   |
| \[[DDD20]\]                  | 2020 | DAVIS 346B 346 x 260 px       | ✓               |                   | ✓          |             |            | ✓        | ✓        | ✓        |             |             |             |             |                                                          | RGB                                                | Highway, Urban                                       | 30 hr, HDF5 format                                   |
| \[[ADD]\]                    | 2020 | Prophesee Gen1 346 x 240 px   | ✓               |                   | ✓          | ✓           | ✓          | ✓        |          |          |             |             |             |             |                                                          | RGB                                                | City, Highway, Suburban, Countryside                 | 10 hr, DAT format 255K bounding boxes                |
| \[[1Mpx Detection Dataset]\] | 2020 | Prophesee Gen2 1280 x 720 px  | ✓               |                   | ✓          | ✓           | ✓          | ✓        |          |          |             |             |             |             |                                                          | RGB                                                | City, Highway, Suburban, Countryside                 | 14 hr, DAT format 25M bounding boxes                 |
| \[[DSEC]\]                   | 2021 | Prophesee Gen3.1 640 x 480 px | ✓               |                   | ✓          |             |            | ✓        | ✓        |          |             |             |             |             |                                                          | RGB, Lidar, GNSS                                   | City                                                 | ~ 1 hr                                               |
| v2e                          | 2021 | v2e simulator                 | ✓               |                   | ✓          |             |            | ✓        |          |          |             |             |             |             |                                                          | -                                                  | Indoor, Outdoor                                      | Frame-based from MVSEC converted to the event stream |
| \[[SEVD]\]                   | 2024 | DVS                           | ✓               | ✓                 | ✓          | ✓           | ✓          | ✓        | ✓        | ✓        | ✓           | ✓           | ✓           | ✓           | ✓ (6 Ego and 4 Fixed event cameras used with a 360° FoV) | RGB, Depth, Optical, Semantic, Instance, GNSS, IMU | Urban, Highway, Suburban, Countryside, Intersections | 58 hr, npz format, 9M bounding boxes                 |
