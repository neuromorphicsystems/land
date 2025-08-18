---
{
    "name": "HighREV",
    "aliases": [],
    "year": 2023,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS240"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "subcategory": [
        "De-blurring"
    ],
    "task": "Frame/Event Fusion (Frame interpolation)",
    "dataset_properties": {
        "available_online": false,
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
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://codalab.lisn.upsaclay.fr/my/datasets/download/9f275580-9b38-4984-b995-1e59e96b6111",
                "format": "Numpy",
                "available": false
            }
        ],
        "size_gb": 27.6,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Event-Based Frame Interpolation with Ad-hoc Deblurring",
        "doi": "10.1109/CVPR52729.2023.01730",
        "authors": [
            "Lei Sun",
            "Christos Sakaridis",
            "Jingyun Liang",
            "Peng Sun",
            "Kai Zhang",
            "Jiezhang Cao",
            "Qi Jiang",
            "Kaiwei Wang",
            "Luc Van Gool"
        ],
        "abstract": "The performance of video frame interpolation is inherently correlated with the ability to handle motion in the input scene. Even though previous works recognize the utility of asynchronous event information for this task, they ignore the fact that motion may or may not result in blur in the input video to be interpolated, depending on the length of the exposure time of the frames and the speed of the motion, and assume either that the input video is sharp, restricting themselves to frame interpolation, or that it is blurry, including an explicit, separate deblurring stage before interpolation in their pipeline. We instead propose a general method for event-based frame interpolation that performs deblurring ad-hoc and thus works both on sharp and blurry input videos. Our model consists in a bidirectional recurrent network that naturally incorporates the temporal dimension of interpolation and fuses information from the input frames and the events adaptively based on their temporal proximity. In addition, we introduce a novel real-world high-resolution dataset with events and color videos named HighREV, which provides a challenging evaluation setting for the examined task. Extensive experiments on the standard GoPro benchmark and on our dataset show that our network consistently outperforms previous state-of-the-art methods on frame interpolation, single image deblurring and the joint task of interpolation and deblurring. Our code and dataset are available at https://github.com/ AHupuJR/REFID.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 33,
            "updated": "2025-07-08T07:36:43.162798"
        },
        {
            "source": "scholar",
            "count": 70,
            "updated": "2025-07-08T07:36:42.903255"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2301.05191"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10205073"
        },
        {
            "type": "github_page",
            "url": "https://github.com/AHupuJR/REFID"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "30",
        "stereo": false
    },
    "bibtex": {
        "pages": "18043--18052",
        "year": 2023,
        "month": "jun",
        "author": "Sun, Lei and Sakaridis, Christos and Liang, Jingyun and Sun, Peng and Zhang, Kai and Cao, Jiezhang and Jiang, Qi and Wang, Kaiwei and Van Gool, Luc",
        "publisher": "IEEE",
        "booktitle": "2023 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} ({CVPR})",
        "urldate": "2024-04-13",
        "language": "en",
        "doi": "10.1109/CVPR52729.2023.01730",
        "url": "https://ieeexplore.ieee.org/document/10205073/",
        "isbn": "9798350301298",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "Event-{Based} {Frame} {Interpolation} with {Ad}-hoc {Deblurring}",
        "address": "Vancouver, BC, Canada",
        "type": "inproceedings",
        "key": "sun_event-based_2023"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPR.2018.00938",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00853",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19797-0_24",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01589",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00338",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01723",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00516",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00354",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58583-9_32",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00745",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00382",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2980179.2980257",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00201",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01032",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.35",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58598-3_41",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58571-6_4",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00345",
            "source": "crossref"
        },
        {
            "doi": "10.1145/1015706.1015766",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00398",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00548",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00564",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00698",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01724",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01458",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2018.2876178",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00449",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.90",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01728",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00027",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01237-3_26",
            "source": "crossref"
        },
        {
            "title": "RIFE: Real-time intermediate flow estimation for video frame interpolation",
            "source": "crossref"
        },
        {
            "title": "Event -guided deblurring of unknown exposure time videos",
            "source": "crossref"
        },
        {
            "title": "Convolutional lstm network: A machine learning approach for precipitation nowcasting",
            "source": "crossref"
        },
        {
            "title": "Deep learning for precipitation nowcasting: A benchmark and a new model",
            "source": "crossref"
        },
        {
            "title": "Adam: A method for stochastic optimization",
            "source": "crossref"
        },
        {
            "title": "Event-based image deblurring with dynamic motion awareness",
            "source": "crossref"
        },
        {
            "title": "ESIM: an open event camera simulator",
            "source": "crossref"
        },
        {
            "title": "Quadratic video interpolation",
            "source": "crossref"
        },
        {
            "title": "Demfi: Deep joint de-blurring and multi-frame interpolation with flow-guided at-tentive correlation and recursive boosting",
            "source": "crossref"
        },
        {
            "title": "U-Net: Convolutional networks for biomedical image segmentation",
            "source": "crossref"
        },
        {
            "title": "Learning to deblur and generate high frame rate video with an event camera",
            "source": "crossref"
        },
        {
            "title": "Simple baselines for image restoration",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

The HighREV dataset consists of 30 sequences with a total of 28589 sharp images and corresponding events. We use 19934 images for training/fine-tuning and 8655 images for evaluation. The size of each RGB image is 1632 × 1224. The events and images are spatially aligned in the sensor. Each event has only one channel (intensity), with pixel coordinates, timestamp and polarity. 70% of the video sequences are used for training and 30% for testing and we keep the ratio of indoor and outdoor scenes approximately the same in each subset. For the collection of the dataset, the exposure time of the camera is set to 15ms and the f-stop of the lens is set to 2. The frame rate of the APS image is set to 25
