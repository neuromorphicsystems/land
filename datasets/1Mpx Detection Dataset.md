---
{
    "name": "1Mpx Detection Dataset",
    "aliases": [],
    "year": 2020,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [],
    "category": "Robotic and Moving Vehicle Datasets",
    "subcategory": [
        "Autonomous Driving",
        "Object Detection",
        "Pedestrian Detection",
        "Vehicle Detection"
    ],
    "task": "Driving Dataset",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "Binary"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://kdrive.infomaniak.com/app/share/975517/52c7b51a-488e-42d8-a44f-e004f4bd0f08/files/51",
                "format": "Binary",
                "available": true
            }
        ],
        "size_gb": 1230.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Learning to detect objects with a 1 megapixel event camera",
        "doi": "10.5555/3495724.3497120",
        "authors": [
            "Etienne Perot",
            "Pierre de Tournemire",
            "Davide Nitti",
            "Jonathan Masci",
            "Amos Sironi"
        ],
        "abstract": "Event cameras encode visual information with high temporal precision, low datarate, and high-dynamic range. Thanks to these characteristics, event cameras are particularly suited for scenarios with high motion, challenging lighting conditions and requiring low latency. However, due to the novelty of the field, the performance of event-based systems on many vision tasks is still lower compared to conventional frame-based solutions. The main reasons for this performance gap are: the lower spatial resolution of event sensors, compared to frame cameras; the lack of large-scale training datasets; the absence of well established deep learning architectures for event-based processing. In this paper, we address all these problems in the context of an event-based object detection task. First, we publicly release the first high-resolution large-scale dataset for object detection. The dataset contains more than 14 hours recordings of a 1 megapixel event camera, in automotive scenarios, together with 25M bounding boxes of cars, pedestrians, and two-wheelers, labeled at high frequency. Second, we introduce a novel recurrent architecture for event-based detection and a temporal consistency loss for better-behaved training. The ability to compactly represent the sequence of events into the internal memory of the model is essential to achieve high accuracy. Our model outperforms by a large margin feed-forward event-based architectures. Moreover, our method does not require any reconstruction of intensity images from events, showing that training directly from raw events is possible, more efficient, and more accurate than passing through an intermediate intensity image. Experiments on the dataset introduced in this work, for which events and gray level images are available, show performance on par with that of highly tuned and studied frame-based detectors.",
        "open_access": true
    },
    "citation_counts": [
        {
            "source": "Google Scholar",
            "count": 271,
            "updated": "2025-01-07 10:30:56.983664"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2009.13436"
        },
        {
            "type": "paper",
            "url": "https://dl.acm.org/doi/abs/10.5555/3495724.3497120"
        },
        {
            "type": "project_page",
            "url": "https://www.prophesee.ai/2020/11/24/automotive-megapixel-event-based-dataset/"
        },
        {
            "type": "github_page",
            "url": "https://github.com/prophesee-ai/prophesee-automotive-dataset-toolbox"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "total_duration": "14.65 hours",
        "num_classes": "3",
        "stereo": false
    },
    "bibtex": {
        "note": "event-place: Vancouver, BC, Canada",
        "year": 2020,
        "author": "Perot, Etienne and de Tournemire, Pierre and Nitti, Davide and Masci, Jonathan and Sironi, Amos",
        "publisher": "Curran Associates Inc.",
        "booktitle": "Proceedings of the 34th {International} {Conference} on {Neural} {Information} {Processing} {Systems}",
        "doi": "10.5555/3495724.3497120",
        "isbn": "978-1-71382-954-6",
        "title": "Learning to detect objects with a 1 megapixel event camera",
        "series": "{NIPS} '20",
        "address": "Red Hook, NY, USA",
        "type": "inproceedings",
        "key": "perot_learning_2020"
    }
}
---

### Dataset Structure

- Contains 14.65 hours of recordings
- Contains 3 different classes of objects (car / pedestrian / two-wheeler)

The dataset is split between train, test and val folders.

Files consist of 60 seconds recordings that were cut from longer recording sessions. Cuts from a single recording session are all in the same training split.

Each dat file is a binary file in which events are encoded using 4 bytes (unsigned int32) for the timestamps and 4 bytes (unsigned int32) for the data, encoding is little-endian ordering.

The data is composed of 14 bits for the x position, 14 bits for the y position and 1 bit for the polarity (encoded as -1/1).

Annotations use the [numpy](https://numpy.org/) format and can simply be loaded form python using numpy `boxes = np.load(path)`

Boxes have the following fields

- **_x_** abscissa of the top left corner in pixels
- **_y_** ordinate of the top left corner in pixels
- **_w_** width of the boxes in pixel
- **_h_** height of the boxes in pixel
- **_ts_** timestamp of the box in the sequence in microseconds
- **_class_id 0_** for pedestrians, **_1_** for two wheelers, **_2_** for cars, **_3_** for trucks, **_4_** for buses, **_5_** for traffic signs, **_6_** for traffic lights

Source: https://www.prophesee.ai/2020/11/24/automotive-megapixel-event-based-dataset/
