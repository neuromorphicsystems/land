---
{
    "name": "EventSleep",
    "aliases": [],
    "year": 2024,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DVXplorer"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Sleep Monitoring",
        "Human Action Recognition"
    ],
    "description": "Sleep Monitoring",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Other"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "Form submission required to access dataset",
        "dataset_links": [
            {
                "name": "Other",
                "url": "https://doi.org/10.7303/syn54156328",
                "format": "Numpy",
                "available": true,
                "doi": "https://doi.org/10.7303/syn54156328"
            }
        ],
        "size_gb": 57.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "EventSleep -  Sleep Activity Recognition with Event Cameras",
        "doi": "10.48550/arXiv.2404.01801",
        "authors": [
            "Carlos Plou",
            "Nerea Gallego",
            "Alberto Sabater",
            "Eduardo Montijano",
            "Pablo Urcola",
            "Luis Montesano",
            "Ruben Martinez-Cantin",
            "Ana C. Murillo"
        ],
        "abstract": "Event cameras are a promising technology for activity recognition in dark environments due to their unique properties. However, real event camera datasets under low-lighting conditions are still scarce, which also limits the number of approaches to solve these kind of problems, hindering the potential of this technology in many applications. We present EventSleep, a new dataset and methodology to address this gap and study the suitability of event cameras for a very relevant medical application: sleep monitoring for sleep disorders analysis. The dataset contains synchronized event and infrared recordings emulating common movements that happen during the sleep, resulting in a new challenging and unique dataset for activity recognition in dark environments. Our novel pipeline is able to achieve high accuracy under these challenging conditions and incorporates a Bayesian approach (Laplace ensembles) to increase the robustness in the predictions, which is fundamental for medical applications. Our work is the first application of Bayesian neural networks for event cameras, the first use of Laplace ensembles in a realistic problem, and also demonstrates for the first time the potential of event cameras in a new application domain: to enhance current sleep evaluation procedures. Our activity recognition results highlight the potential of event cameras under dark conditions, and its capacity and robustness for sleep activity recognition, and open problems as the adaptation of event data pre-processing techniques to dark environments.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "Google Scholar",
            "count": 1,
            "updated": "2025-01-07 07:07:45.836611"
        },
        {
            "source": "scholar",
            "count": 1,
            "updated": "2025-07-08T06:56:37.812472"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2404.01801v1"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2404.01801v1"
        },
        {
            "type": "project_page",
            "url": "https://sites.google.com/unizar.es/eventsleep/home"
        },
        {
            "type": "github_page",
            "url": "https://github.com/cplou99/EventSleep"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_subjects": "14",
        "num_females": "4",
        "num_males": "10",
        "num_recordings": "1016",
        "num_trials": "42",
        "num_classes": "10"
    },
    "bibtex": {
        "keywords": "Computer Science - Computer Vision and Pattern Recognition",
        "note": "arXiv:2404.01801 [cs]",
        "year": 2024,
        "month": "apr",
        "author": "Plou, Carlos and Gallego, Nerea and Sabater, Alberto and Montijano, Eduardo and Urcola, Pablo and Montesano, Luis and Martinez-Cantin, Ruben and Murillo, Ana C.",
        "publisher": "arXiv",
        "urldate": "2024-12-07",
        "language": "en",
        "doi": "10.48550/arXiv.2404.01801",
        "url": "http://arxiv.org/abs/2404.01801",
        "shorttitle": "{EventSleep}",
        "title": "{EventSleep}: {Sleep} {Activity} {Recognition} with {Event} {Cameras}",
        "type": "misc",
        "key": "plou_eventsleep_2024"
    }
}
---

### Dataset Structure

The dataset consists of a total of 1,016 clips, acquired as part of 42 trials (14 participants under 3 different configurations). Each trial contains over 20 action clips, each lasting about 5 seconds. There are separate training (744 activity clips, from 10 subjects, 3 trials each) and test (272 activity clips, from 4 other subjects not included in training, 3 trials each) sets. The training and test set were built to increase diversity and minimize biases, such as sex or appearance. The test set also includes the untrimmed recordings for each subject, to facilitate online action recognition proposals evaluation.

- Dataset contains 14 subjects (4 and 10)
- Dataset contains [1016] recordings obtained through 42 trials
- Dataset contains 10 different activities
