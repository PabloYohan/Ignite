import { beforeEach, describe, expect, it, vi, afterEach } from 'vitest'
import { InMemoryCheckInsRepository } from '@/repositories/In-memory/In-memory-check-ins-repository'
import { CheckInUseCase } from './checkin'
import { InMemoryGymsRepository } from '@/repositories/In-memory/In-memory-gym-repository'
import { Decimal } from '@prisma/client/runtime/library'

let checkInRepository: InMemoryCheckInsRepository
let gymsRepository: InMemoryGymsRepository
let sut: CheckInUseCase

describe('Checkin Use Case', () => {
  beforeEach(() => {
    checkInRepository = new InMemoryCheckInsRepository()
    gymsRepository = new InMemoryGymsRepository()
    sut = new CheckInUseCase(checkInRepository, gymsRepository)

    gymsRepository.items.push({
      id: 'gym-01',
      description: '',
      title: 'JavaScript Gym',
      phone: '',
      latitude: new Decimal(0),
      longitude: new Decimal(0),
    })

    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should be able to check in', async () => {
    const { checkIn } = await sut.execute({
      gymId: 'gym-01',
      userId: 'user-01',
      userLatitude: 0,
      userLogitude: 0,
    })

    expect(checkIn.id).toEqual(expect.any(String))
  })

  it('should not be able to check in twice in the same day', async () => {
    vi.setSystemTime(new Date(2022, 0, 20, 8, 0, 0))
    await sut.execute({
      gymId: 'gym-01',
      userId: 'user-01',
      userLatitude: 0,
      userLogitude: 0,
    })

    await expect(() =>
      sut.execute({
        gymId: 'gym-01',
        userId: 'user-01',
        userLatitude: 0,
        userLogitude: 0,
      }),
    ).rejects.toBeInstanceOf(Error)
  })

  it('should be able to check in twice but in different day', async () => {
    vi.setSystemTime(new Date(2022, 0, 20, 8, 0, 0))
    await sut.execute({
      gymId: 'gym-01',
      userId: 'user-01',
      userLatitude: 0,
      userLogitude: 0,
    })

    vi.setSystemTime(new Date(2022, 0, 21, 8, 0, 0))

    const { checkIn } = await sut.execute({
      gymId: 'gym-01',
      userId: 'user-01',
      userLatitude: 0,
      userLogitude: 0,
    })

    expect(checkIn.id).toEqual(expect.any(String))
  })
})
